import React from 'react';
import './Card.css';

const Card = ({ monster }) => {
	return (
		<div className="card-container">
			<img
				alt="monster"
				src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
			/>
			<h2 className="monster-name">{monster.name}</h2>
			<p className="monster-name">{monster.email}</p>
		</div>
	);
};

export default Card;
