import React, { Component } from 'react';

const Button = ({iconType, click, text}) => {
	return (
		<button className="btn btn-default" onClick={click}>
			{iconType ? (
				<i className={`icon fa ${iconType}`}></i>
			) : ''}
			<span>{text}</span>
		</button>
	);
}

export default Button;