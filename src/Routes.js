
import React from 'react'
// import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Navbar from './core/navbar';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
// import UserDashBoard from './user/UserDashBoard'
// import AdminDashBoard from './user/AdminDashBoard';

import {
	BrowserRouter as Router,
	Route,
	Routes,
	// useLocation
} from "react-router-dom";

const UserDashBoard = React.lazy(() => import("./user/UserDashBoard"));
const AdminDashBoard = React.lazy(() => import("./user/AdminDashBoard"));

const Trial = () => {
	return (
		<Router>
		
		  <Navbar />
			<Routes>
				<Route path="/user/dashboard" element={
					<PrivateRoute>
						<UserDashBoard />
					</PrivateRoute>
				} />
				<Route path="/admin/dashboard/*" element={
					<AdminRoute>
						<AdminDashBoard />
					</AdminRoute>
				} />				
				<Route path="/" element={<Home />} />
			    <Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
	      </Routes>
	  </Router>
  )
}

export default Trial;
