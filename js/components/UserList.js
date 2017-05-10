import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {

	render() {
		const rows = this.props.users.map((user, index) => {
			return <UserData user={user} key={index} setActiveUser={this.props.setActiveUser} />;
		});
		return (
			<table className="table userList">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
};