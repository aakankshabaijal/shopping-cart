import React, { Component } from 'react';

const AddProduct = (props) => {
	return (
		<div>
			<h1>Add Product Form</h1>
			<form
				onSubmit={() => {
					props.addProduct(this);
				}}
			>
				<input type="text" name="title" placeholder="Product Title" />
				<input type="number" name="price" placeholder="Price" />
				<input type="number" name="quantity" placeholder="Quantity" />
				<input type="text" name="img" placeholder="Image src" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddProduct;
