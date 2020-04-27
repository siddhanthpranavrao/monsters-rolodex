import React from 'react';
import './CardList.css';
import Card from '../card/Card';

const CardList = ({ monsters, searchField }) => {
	const filterMonsters = monsters.filter(monster =>
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	);
	const monsterList = filterMonsters.map(monster => (
		<Card monster={monster} key={monster.id} />
	));

	return <div className="card-list">{monsterList}</div>;
};

export default CardList;
