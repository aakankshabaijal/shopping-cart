import React from 'react';

const Navbar = (props) => {
	return (
		<div className="navbar w-screen h-16 bg-blue-300 flex p-2 ">
			<img
				src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
				alt="cart"
				className="h-10 w-auto absolute right-5"
			/>
			<span className="border-2 border-solid border-yellow-400 rounded-full h-6 w-6 bg-yellow-400 text-center absolute right-1 align-middle">
				{props.count}
			</span>
		</div>
	);
};

export default Navbar;
