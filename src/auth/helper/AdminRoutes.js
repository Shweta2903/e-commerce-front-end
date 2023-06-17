import React from "react";
import { isAuthenticated } from "./index";
import { Route, Routes, Navigate } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
	return (
		<Routes>
	  <Route
		{...rest}
		render={props => 
			isAuthenticated() && isAuthenticated().user.role === 1 ? (
			children (props)
		  ) : (
			<Navigate
			  to={{
				pathname: "/signin",
				state: { from: props.location }
			  }}
			/>
		  )
		}
	  /> </Routes>
	);
  };
  

export default AdminRoute;