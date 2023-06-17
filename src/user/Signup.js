import React, {useState} from "react";
import Base from '../core/Base';
import {Link} from 'react-router-dom'
import { signup } from "../auth/helper/index";



const Signup = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		success: false
	});

	const {name, email, password, error, success} = values

	const handleChange = (event) => {
		setValues({
		  ...values,
		  [event.target.name]: event.target.value
		});
	  };

	const onSubmit = event => {
		event.preventDefault()
		setValues({ ...values, error: false })
		signup({ name, email, password })
			.then(data => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false })
				}
				else {
					setValues({
						...values,
						name: "",
						email: "",
						password: "",
						error: "",
						success: true
					})
				}
			}).catch(console.log("Error in signup process"));

	}

	const signUpForm = () => {
		return (
			<div className="row py-3">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
						<div className="form-group">
							<label className="text-white">Name</label>
							<input type="text"
								onChange={handleChange("name")}
								className="form-control"
								value={ name } />
						</div>
						<div className="form-group">
							<label className="text-white">Email</label>
							<input type="email"
								onChange={handleChange("email")}
								className="form-control"
								value={ email }/>
						</div>
						<div className="form-group">
							<label className="text-white">Password</label>
							<input
								onChange={handleChange("password")}
								type="password"
								className="form-control"
								value={ password }/>
						</div>
						<button onClick={onSubmit}
							className="btn btn-info btn-block rounded-3 my-2">Submit</button>
					</form>
				</div>
			</div>
		)
	}

	const successMsg = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="alert alert-success"
					style={{ display: success ? "" : "none" }}>New account was created successfully. Please 
						<Link to="/signin">Login Here</Link>
					</div>
				</div>
			</div>
		)
	}

	const errorMsg = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="alert alert-danger"
						style={{ display: error ? "" : "none" }}>
						{error}
					</div>
				</div>
			</div>
		)
	}

  return (
	  <Base title="Sign up page">
		  {errorMsg()}
		  {successMsg()}
		  {signUpForm()}
		  <p className="text-white text-center">{JSON.stringify(values)}</p>
		  
	  </Base>
  ) 
}

export default Signup;