import React, { Component } from 'react';
import Button from './Button';

export default class Toolbar extends Component {
	sortByName() {
		this.props.sortByName();
	}
	sortByAge() {
		this.props.sortByAge();
	}
	render() {
		return (
			<div className="toolbar">
				<Button iconType="fa-sort-alpha-asc" click={this.sortByName.bind(this)} text="Сортировать по имени" />
				<Button iconType="fa-sort-numeric-desc" click={this.sortByAge.bind(this)} text="Сортировать по возрасту" />
			</div>
		);
	}
}