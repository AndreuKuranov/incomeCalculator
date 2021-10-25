import React from "react";
import "./SumColumn.css";

const SumColumn = (props) => {
	return (
		<div className={props.className}>
			<div className="column__item">
				<div className="column__icon">
					<img className="column__image" src={props.icon} alt="month"/>
				</div>
				<h3 className="column__title text">{props.title}</h3>
				<div className="column__value text">0</div>
			</div>
		</div>
	);
}

export default SumColumn;