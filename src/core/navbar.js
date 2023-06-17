import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";

const currentTab = (history, path) => {
  if (history.pathname === path) {
    return { color: "#c279f2" };
  } else {
    return { color: "FFFFFF" };
  }
};

const Navbar = () => {
  const history = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-sm text-bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/")}
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/card")}
                  className="nav-link"
                  to="/card"
                >
                  Cart
                </Link>
              </li>
              { isAuthenticated() && isAuthenticated().user.role === 0 && (
              <li className="nav-item">
				  <Link
                  style={currentTab(history, "/user/dashboard")}
                  className="nav-link"
                  to="/user/dashboard"
                >
                  Dashboard
                </Link>
              </li>
			  )}
             {isAuthenticated() && isAuthenticated().user.role === 1 && ( 
				 <li className="nav-item">
				 <Link
				   style={currentTab(history, "/admin/dashboard")}
				   className="nav-link"
				   to="/admin/dashboard"
				 >
				   Admin Dashboard
				 </Link>
			   </li>
			 )}
              {!isAuthenticated() && (
                <>
                  <li className="nav-item">
                    <Link
                      style={currentTab(history, "/signup")}
                      className="nav-link"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={currentTab(history, "/signin")}
                      className="nav-link"
                      to="/signin"
                    >
                      SignIn
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && (
                <li className="nav-item">
                  <span
                    className="nav-link text-warning"
                    onClick={() => {
					signout(() => {
						// return <Navigate to="/" replace />;
						return <Navigate to="/" replace />;
                      });
                    }}
                  >
                    SignOut
                  </span>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-1"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary rounded-5" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
