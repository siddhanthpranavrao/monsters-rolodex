import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange, placeholder }) => {
	return (
		<div>
			<input
				className="search"
				type="search"
				placeholder={placeholder}
				onChange={({ target }) => onInputChange(target.value)}
			/>
		</div>
	);
};

export default SearchBox;
