import React from "react";
import "./SumColumn.css";

const SumColumn = (props) => {
	return (
		<div className="sum__column">
			<div className="sum__item">
				<div className="sum__icon">
					<img className="sum__image" src={props.icon} alt="month"/>
				</div>
				<h3 className="sum__title text">{props.title}</h3>
				<div className="sum__value text">0</div>
			</div>
		</div>
	);
}

export default SumColumn;