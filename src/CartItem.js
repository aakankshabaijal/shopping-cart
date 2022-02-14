import React from 'react';

const CartItem = (props) => {
	const { title, price, quantity, img } = props.product;
	const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
	return (
		<div className="cart-item flex flex-row border-2 rounded m-4 p-2">
			<div className="cart-item-image w-32 h-auto border-2 rounded mr-4">
				<img src={img} alt="product" className="bg-cover w-32 h-32" />
			</div>
			<div className="cart-item-info border-2 grow rounded p-2">
				<div className="cart-item-title text-3xl">
					<h3>{title}</h3>
				</div>
				<div className="cart-item-price">Rs. {price}</div>
				<div className="cart-item-quantity">Quantity : {quantity}</div>
				<div className="cart-item-actions flex space-x-2 mt-4">
					<img
						src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
						className="w-6 cursor-pointer"
						onClick={() => {
							onIncreaseQuantity(product);
						}}
						alt="increase quantity button"
					/>
					<img
						src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
						className="w-6 cursor-pointer"
						onClick={() => {
							onDecreaseQuantity(product);
						}}
						alt="decrease quantity button"
					/>
					<img
						src="https://img.icons8.com/windows/50/000000/trash.png"
						className="w-6 cursor-pointer"
						onClick={() => {
							onDeleteProduct(product.id);
						}}
						alt="delete item button"
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
