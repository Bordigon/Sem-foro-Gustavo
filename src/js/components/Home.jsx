import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Luz from "./Luz.jsx"


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">holaaaa</h1>
			<div id="semaforo" className="d-flex align-items-center justify-content-center">
				<div id="cajaSemaforo" className="row justify-content-center m-0">
					<Luz id="1" inicio="apagado" color="red"/>
					<Luz id="2" inicio="apagado" color="yellow" onclick="enscendido()"/>
					<Luz id="3" inicio="apagado" color="green" onclick="enscendido()"/>
				</div>
			</div>
			<div className="mt-3">
				<div id="1" className="btn btn-success">
					hello
				</div>
				<div id="2" className="btn btn-primary mx-3">
					niggers
				</div>
				<div id="3" className="btn btn-danger">
					niggers pero en rojo
				</div>
			</div>
		</div>
	);
};

export default Home;