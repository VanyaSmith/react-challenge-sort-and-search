import React, { Component } from 'react';

const ActiveUser = ({user}) => {
  return (
    <div className="activeUser">
    	{user ? (
    		<div className="activeUser__inner">
				<div className="activeUser__avatar">
					<img src={`images/${user.image}.svg`} />
				</div>
				<div className="activeUser__info">
					<table className="table">
						<tbody>
							<tr>
								<td>Age:</td>
								<td>{user.age}</td>
							</tr>
							<tr>
								<td>Favorite animal:</td>
								<td>{user.image}</td>
							</tr>
							<tr>
								<td>Phone:</td>
								<td>{user.phone}</td>
							</tr>
						</tbody>
					</table>
					<p>{user.phrase}</p>
				</div>
			</div>
		) : (
			<p>Нету =(</p>
		)}
    </div>
  );
}

export default ActiveUser;