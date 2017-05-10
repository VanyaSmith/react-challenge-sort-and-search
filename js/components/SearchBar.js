import React, { Component } from 'react';

export default class SearchBar extends Component {
	handleChange(e) {
		this.props.searchInput(e.target.value);
	}
	render() {
		return (
			<input placeholder="Давай искать..." value={this.props.value} className="form-control" onChange={this.handleChange.bind(this)} />
		);
	}
};