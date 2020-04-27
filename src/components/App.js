import React from 'react';
import monsters from '../apis/monsters';
import CardList from './card-list/CardList';
import './App.css';
import SearchBox from './search-box/SearchBox';

class App extends React.Component {
	state = { monsters: [], searchField: '' };

	getMonsterData = async () => {
		const response = await monsters.get('/users');

		this.setState({ monsters: response.data });
	};

	componentDidMount() {
		this.getMonsterData();
	}

	onInputChange = searchField => {
		this.setState({ searchField });
	};

	render() {
		return (
			<div className="App">
				<h1> Mosters Roledex </h1>
				<SearchBox
					onInputChange={this.onInputChange}
					placeholder="Search Monsters..."
				/>
				<CardList
					searchField={this.state.searchField}
					monsters={this.state.monsters}
				/>
			</div>
		);
	}
}

export default App;
