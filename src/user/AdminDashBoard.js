import React from 'react';
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index'

const AdminDashBoard = () => {
	console.log("user dash board running");

	const {user: {name, email, role}} = isAuthenticated();
	const adminLeftSide =  () => {
		return (
			<div className='card'>
				<h4 className="card-helper bg-text-dark">Admin navigation</h4>
				<ul className="list-group">
					<li className="list-group-item">
						<link to="/admin/create/category" className='nav-link text-success'>Create Categories</link>
					</li>
					<li className="list-group-item">
						<link to="/admin/create/product" className='nav-link text-success'>Create Product</link>
					</li>
					<li className="list-group-item">
						<link to="/admin/products" className='nav-link text-success'>Manage Product</link>
					</li>
					<li className="list-group-item">
						<link to="/admin/orders" className='nav-link text-success'>Manage Orders</link>
					</li>
				</ul>
			</div>
		)
	}

	const adminRightSide = () => {
	return(
		<div className="card mb-4">
			<h4 className="card-header">Admin Information</h4>
			<ul className="list-group">
				<li className="list-group-item">
					<span className="badge badge-success mr-2">Name:</span> {name}
				</li>
				<li className="list-group-item">
					<span className="badge badge-success mr-2">Email:</span> {email}
				</li>
				<li className="list-group-item">
					<span className="badge badge-danger mr-2">Admin Area</span>
				</li>				
			</ul>
		</div>
	)
}

	return (<>
	<Base title="Welcome to Admin Area" className='container bg-success p-4'>
		<div className="row">
			<div className="col-3">
			{adminLeftSide}
			</div>
			<div className="col-9">
			{adminRightSide}
			</div>
		</div>
	</Base> 
	</>)
}




export default AdminDashBoard;



