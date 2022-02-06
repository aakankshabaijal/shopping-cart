import React from 'react';

class CartItem extends React.Component {
	render() {
		return (
			<div className="cart-item flex flex-row border-2 rounded m-4 p-2">
				<div className="cart-item-image w-28 h-auto border-2 rounded mr-4">
					<img />
				</div>
				<div className="cart-item-info border-2 grow rounded p-2">
					<div className="cart-item-title text-3xl">
						<h3>Phone</h3>
					</div>
					<div className="cart-item-price">Rs. 100</div>
					<div className="cart-item-quantity">Quantity : 1</div>
					<div className="cart-item-actions">{/* Buttons */}</div>
				</div>
			</div>
		);
	}
}

export default CartItem;
