import React from "react";
import PropTypes from "prop-types";

import Clock from "./Clock.jsx";

//create your first component
const Home = props => {
	return (
		<>
			<div className="counter-container">
				<div className="clock-icon">
					<i className="far fa-clock"></i>
				</div>
				<div className="number">{props.numberSix % 10}</div>
				<div className="number">{props.numberFive % 10}</div>
				<div className="number">{props.numberFour % 10}</div>
				<div className="number">{props.numberThree % 10}</div>
				<div className="number">{props.numberTwo % 10}</div>
				<div className="number">{props.numberOne % 10}</div>
			</div>
		</>
	);
};

export default Home;

Home.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
	numberSix: PropTypes.number
};
