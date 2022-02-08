import React from 'react';

class CartItem extends React.Component {
	constructor() {
		super();
		this.state = {
			title    : 'Phone',
			price    : 999,
			quantity : 1,
			img      : ''
		};
	}

	increaseQuantity = () => {
		//arrow functions bind this to the instance of the class
		/**
		 * setState() is asynchronous normally,
		 * but in a promise it behaves like a synchronous call
		 */
		this.setState((prevState) => {
			return {
				quantity : prevState.quantity + 1
			};
		});
	};

	decreaseQuantity = () => {
		//arrow functions bind this to the instance of the class

		if (this.state.quantity === 1) {
			return;
		}
		this.setState((prevState) => {
			return {
				quantity : prevState.quantity - 1
			};
		});
	};

	render() {
		return (
			<div className="cart-item flex flex-row border-2 rounded m-4 p-2">
				<div className="cart-item-image w-32 h-auto border-2 rounded mr-4">
					<img src={this.state.img} />
				</div>
				<div className="cart-item-info border-2 grow rounded p-2">
					<div className="cart-item-title text-3xl">
						<h3>{this.state.title}</h3>
					</div>
					<div className="cart-item-price">Rs. {this.state.price}</div>
					<div className="cart-item-quantity">Quantity : {this.state.quantity}</div>
					<div className="cart-item-actions flex space-x-2 mt-4">
						<img
							src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
							className="w-6 cursor-pointer"
							onClick={this.increaseQuantity}
						/>
						<img
							src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
							className="w-6 cursor-pointer"
							onClick={this.decreaseQuantity}
						/>
						<img
							src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1644300098~hmac=3ae3d192e16a8b63b6d0c306b4fe5cb6"
							className="w-6 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default CartItem;
