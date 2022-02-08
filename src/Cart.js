import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			products : [
				{
					title    : 'Phone',
					price    : 999,
					quantity : 1,
					img      : '',
					id       : 1
				},
				{
					title    : 'Watch',
					price    : 99,
					quantity : 4,
					img      : '',
					id       : 2
				},
				{
					title    : 'Laptop',
					price    : 10000,
					quantity : 1,
					img      : '',
					id       : 3
				}
			]
		};
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

	render() {
		const { products } = this.state;
		return (
			<div>
				{products.map((product) => {
					return (
						<CartItem
							product={product}
							key={product.id}
							onIncreaseQuantity={this.handleIncreaseQuantity}
							onDecreaseQuantity={this.handleDecreaseQuantity}
							onDeleteProduct={this.handleDeleteProduct}
						/>
					);
				})}
			</div>
		);
	}
}

export default Cart;
