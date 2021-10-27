import React from "react";
import "./MainSum.css";
import Column from "./Column";
import Month from './month.png';
import Day from './day.png';
import MoneyBox from './money-box.png';

const MainSum = (props) => {
	return (
		<div className={`sum ${props.className}`}>
			<div className='sum__container container'>
				<div className='sum__body'>
					<Column
						className='sum__column'
						icon={Month}
						title='Доступно в месяц'
					/>
					<Column
						className='sum__column'
						icon={Day}
						title='Доступно в день'
					/>
					<Column
						className='sum__column'
						icon={MoneyBox}
						title='Накопится за год'
					/>
				</div>
			</div>
		</div>
	);
}

export default MainSum;
