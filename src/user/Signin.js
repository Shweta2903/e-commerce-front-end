import React, { useState } from "react";
import Base from "../core/Base";
import { useParams, Navigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import { json } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
	password: "",
	role: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, role, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  console.log(email, password, role, error, loading, didRedirect);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signInForm = () => {
    return (
      <div className="row py-5">
        <div className="col-md-6 offset-sm-3 text-left">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-white">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-3 my-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", email, password, role);
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log("SignIn request failed", err, authenticate());
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      console.log({ didRedirect });
      if (user && user.role === 1) {
		  console.log(err => {
			json({error : "user not define"})
		});
        return <Navigate to="/admin/dashboard" />;
      } else {
        console.log("2222");
        return <Navigate to="/user/dashboard" />;
      }
	}
	 if (isAuthenticated()) {
		  return  <Navigate to="/" />;
		}
  };

  const loadingMsg = () => {
    return (
      loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-warning"></div>
          <h6 className="text-white text-center">Loading...</h6>
        </div>
      )
    );
  };

  const errorMsg = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style= {{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign In page">
      {loadingMsg()}
      {errorMsg()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(setValues)}</p>
      <p>This is sign in page</p>
    </Base>
  );
};

export default Signin;
