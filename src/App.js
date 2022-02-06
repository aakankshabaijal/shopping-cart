import React from 'react';
import CartItem from './CartItem';

function App() {
	return (
		<div className="App font-['Montserrat'] m-4 p-4">
			<h1 className="text-5xl font-bold text-center"> Cart </h1>
			<CartItem />
		</div>
	);
}

export default App;
