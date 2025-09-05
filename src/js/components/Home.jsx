import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Luz from "./Luz.jsx"


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Semáforo</h1>
			<div id="semaforo" className="d-flex align-items-center justify-content-center">
				<div id="cajaSemaforo" className="row justify-content-center m-0">
					<Luz/>
				</div>
			</div>
			<div className="mt-3">
				<div id="1" className="btn btn-danger">
					
				</div>
				<div id="2" className="btn btn-warning mx-3">
					
				</div>
				<div id="3" className="btn btn-success">
					
				</div>
			</div>
		</div>
	);
};

export default Home;