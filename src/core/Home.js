import React from 'react';
import "../styles.css";
import { API } from "./backend";
import Base from './Base';


const Home = () => {
	console.log("API IS", API);

	return (
		<Base>
			<h1 className="text-light">
				Hello Front End..!
			</h1>
		</Base>
	);
}

export default Home;