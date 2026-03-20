import React from "react";
import { FaRegClock } from "react-icons/fa6";

const Home = (props) => {
	return (
		<div className="container">    
			<div className="row text-center">
				<div className="col counter">
					<FaRegClock />
				</div>
				<div className="col counter">
					{props.digFour}
				</div>
				<div className="col counter">
					{props.digThree}
				</div>
				<div className="col counter">
					{props.digTwo}
				</div>
				<div className="col counter">
					{props.digOne}
				</div>

			</div> 
			<div className="row text-center">
				<div clasName="col">
					<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
					<button type="button" class="btn btn-primary">Count Down</button>
				</div>
			</div> 
			<div className="row text-center">
				<div clasName="col">
					<button type="button" class="btn btn-secondary" onClick={props.onReset}>Reset</button>
					<button type="button" class="btn btn-success" onClick={props.onStart}>Start</button>
					<button type="button" class="btn btn-danger" onClick={props.onStop}>Stop</button>
				</div>
			</div> 
			<div className="row text-center">
				<div clasName="col">
					<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
					<button type="button" class="btn btn-warning">Alert</button>
				</div>
			</div> 
		</div>
	);
};

export default Home;