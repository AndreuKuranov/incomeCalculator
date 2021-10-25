import React, { useState } from "react";
import "./MainPercent.css";

const MainPercent = () => {

	const [percents, setPercents] = useState(0)

	return (
		<div className="main__percent percent">
			<div className="percent__container container">
				<div className="percent__body">
					<div className="percent__column">
						<h3 className="percent__title text">Сколько отложить</h3>
						<div className="percent__range">
							<input 
								className="percent__input"
								type="range"
								min="0" 
								max="100"
								value={percents}
								onChange={event => setPercents(event.target.value)}
							/>
						</div>
						<div className="percent__text text">{percents} %</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainPercent;