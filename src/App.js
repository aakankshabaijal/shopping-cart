import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import AddProduct from './AddProduct';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products : [],
			loading  : true
		};
	}

	componentDidMount() {
		//listen for changes in the products collection in firebase
		firebase.firestore().collection('products').onSnapshot((snapshot) => {
			const products = snapshot.docs.map((doc) => {
				const data = doc.data();
				data['id'] = doc.id;
				return data;
			});

			this.setState({ products: products, loading: false });
		});
	}

	handleIncreaseQuantity = (product) => {
		let { products } = this.state;
		const index = products.indexOf(product);
		// products[index].quantity += 1;

		// this.setState({
		// 	products : products
		// });

		const docRef = firebase.firestore().collection('products').doc(products[index].id);
		docRef
			.update({
				quantity : products[index].quantity + 1
			})
			.then(() => {
				console.log('Quantity increased in Firebase');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleDecreaseQuantity = (product) => {
		let { products } = this.state;
		const index = products.indexOf(product);
		if (products[index].quantity === 1) {
			return;
		}
		// products[index].quantity -= 1;

		// this.setState({
		// 	products : products
		// });

		const docRef = firebase.firestore().collection('products').doc(products[index].id);
		docRef
			.update({
				quantity : products[index].quantity - 1
			})
			.then(() => {
				console.log('Quantity decreased in Firebase');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleDeleteProduct = (id) => {
		const { products } = this.state;
		// const updatedProducts = products.filter((product) => product.id !== id);

		// this.setState({
		// 	products : updatedProducts
		// });

		const docRef = firebase.firestore().collection('products').doc(id);
		docRef
			.delete()
			.then(() => {
				console.log('Product deleted in Firebase');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	getCartCount = () => {
		const { products } = this.state;
		let count = 0;
		products.forEach((product) => {
			count += product.quantity;
		});

		return count;
	};

	getTotalAmount = () => {
		const { products } = this.state;
		let amount = 0;
		products.forEach((product) => {
			amount += product.quantity * product.price;
		});

		return amount;
	};

	addProduct = () => {
		firebase
			.firestore()
			.collection('products')
			.add({
				title    : 'Alarm Clock',
				price    : 250,
				quantity : 1,
				img      : 'imgsrc'
			})
			.then((docRef) => {
				console.log(docRef);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="App font-['Montserrat'] m-0 p-0 overflow-hidden">
				<Navbar count={this.getCartCount()} />
				<h1 className="text-5xl font-bold text-center"> Cart </h1>
				<Cart
					products={this.state}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handleDeleteProduct}
				/>
				{this.state.loading && <h1 className="text-2xl font-bold">Loading Products...</h1>}
				<div>TOTAL : {this.getTotalAmount()}</div>
				<button
					onClick={this.addProduct}
					className="px-4 py-1 m-2 text-m text-blue-600 font-semibold rounded-full border-2 border-blue-600"
				>
					{' '}
					Add Product to Firebase
				</button>
			</div>
		);
	}
}

export default App;
