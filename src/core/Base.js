import React from 'react';

const Base = ({
	title = "My Title",
	className = "text-bg-dark p-4",
	children
}) => {
  return (
	  <div>
		  <div className="container-fluid">
			  	<div className="mt-2 p-3 bg-primary text-white rounded text-center">
				    <h1 className='display-4'>{title}</h1> 
  					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p> 
			  </div>
			  <div className={className}>{ children }
			  </div>
		  </div>
		  <footer className="footer text-bg-secondary py-2 m-2 text-center">
			  <div className="container-fluid">
				  <h6>If you have any questions, feel free you contact Us</h6>
				  <button className="btn btn-warning btn-xl rounded-pill">Contact Us</button>
			  </div>

		  </footer>
	 </div>
  )
}

export default Base;