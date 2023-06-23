import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState(
    "initialState"
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();
  const goBack = () => (
    <div className="mt-5">
      <Link
        className="btn btn-sm btn-success mb-3"
        to="/admin/dashboard"
      >
        Admin Home
      </Link>
    </div>
  );

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-gruop">
          <p className="lead">
            Enter the category
          </p>
          <input
            type="text"
            className="form-control my-3"
            autoFocus
            required
            placeholder="For Ex. Summer"
          />
          <button className="btn btn-outline-info">
            Create Category
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title="Create a Category here"
      className="bg-info"
      p-4
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
