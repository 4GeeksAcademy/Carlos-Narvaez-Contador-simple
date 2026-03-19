import React from "react";

const Home = (props) => {
	return (
		<div className="container-fluid">
			<div className="row text-center">
				<h1 className="text-center mt-5">Contador</h1>
				<div className="col">
					<i className="fa-regular fa-clock"></i>
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
		</div>
	);
};

export default Home;