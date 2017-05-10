import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';

const sort = (array, key) => {
	if (!array.length) {
		return [];
	}
	const pivot = array[0];
	const leftArray = sort(array.slice(1).filter((value) => value[key] < pivot[key]), key);
	const rightArray = sort(array.slice(1).filter((value) => value[key] >= pivot[key]), key);

	return [...leftArray, pivot, ...rightArray];
};

export default class App extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			searchValue: '',
			outputUsers: this.props.users,
			activeUser: this.props.users[0]
		};
		this.setActiveUser = this.setActiveUser.bind(this);
	}
	searchInput(value) {
		const users = this.props.users.filter((user, index) => {
			if (user.name.indexOf(value) + 1) {
				return user;
			}
		});
		this.setState({
			searchValue: value,
			outputUsers: users,
			activeUser: users[0]
		});
	}
	setActiveUser(user) {
		this.setState({activeUser: user});
	}
	sortByName() {
		this.setState({outputUsers: sort(this.state.outputUsers, 'name')});
	}
	sortByAge() {
		this.setState({outputUsers: sort(this.state.outputUsers, 'age')});
	}
	render() {
		return (
			<div className="container app">
				<div className="row">
					<SearchBar value={this.state.searchValue} searchInput={this.searchInput.bind(this)}/>
				</div>
				<div className="row">
					<Toolbar sortByName={this.sortByName.bind(this)} sortByAge={this.sortByAge.bind(this)} />
				</div>
				<div className="row">
					<div className="col-md-3">
						<ActiveUser user={this.state.activeUser} />
					</div>
					<div className="col-md-9">
						<UserList users={this.state.outputUsers} setActiveUser={this.setActiveUser.bind(this)} />
					</div>
				</div>
			</div>
		);
	}
}