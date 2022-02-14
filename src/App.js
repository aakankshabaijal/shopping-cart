import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
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
		firebase
			.firestore()
			.collection('products')
			.get()
			.then((snapshot) => {
				snapshot.docs.map((doc) => {
					console.log(doc.data());
				});

				const products = snapshot.docs.map((doc) => {
					const data = doc.data();
					data['id'] = doc.id;
					return data;
				});

				this.setState({ products: products, loading: false });
			})
			.catch((error) => {});
	}

	handleIncreaseQuantity = (product) => {
		let { products } = this.state;
		const index = products.indexOf(product);
		products[index].quantity += 1;

		this.setState({
			products : products
		});
	};

	handleDecreaseQuantity = (product) => {
		let { products } = this.state;
		const index = products.indexOf(product);
		if (products[index].quantity === 1) {
			return;
		}
		products[index].quantity -= 1;

		this.setState({
			products : products
		});
	};

	handleDeleteProduct = (id) => {
		const { products } = this.state;
		const updatedProducts = products.filter((product) => product.id !== id);

		this.setState({
			products : updatedProducts
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
			</div>
		);
	}
}

export default App;
