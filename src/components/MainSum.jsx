import React from "react";
import "./MainSum.css";
import Column from "./Column";
import Month from './month.png';
import Day from './day.png';
import MoneyBox from './money-box.png';
import translate from "../i18n/translate";

const MainSum = (props) => {
	return (
		<div className={`sum ${props.className}`}>
			<div className='sum__container container'>
				<div className='sum__body'>
					<Column
						className='sum__column'
						icon={Month}
						title={translate('month')}
					/>
					<Column
						className='sum__column'
						icon={Day}
						title={translate('day')}
					/>
					<Column
						className='sum__column'
						icon={MoneyBox}
						title={translate('money box')}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainSum;
