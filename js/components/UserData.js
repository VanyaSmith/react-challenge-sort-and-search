import React, { Component } from 'react';

export default class UserData extends Component {
	onClickUser(e) {
		this.props.setActiveUser(this.props.user);
	}
	render() {
		const user = this.props.user;
		return (
			<tr onClick={this.onClickUser.bind(this)}>
				<td><img src={`images/${user.image}.svg`} /></td>
				<td>{user.name}</td>
				<td>{user.age}</td>
				<td>{user.phone}</td>
			</tr>
		);
	}
};