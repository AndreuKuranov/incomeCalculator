import React from "react";
import "./MainSum.css";
import SumColumn from "./SumColumn";
import Month from './month.png';
import Day from './day.png';
import MoneyBox from './money-box.png';

const MainSum = () => {
	return (
		<div className="main__sum sum">
			<div className="sum__container container">
				<div className="sum__body">
					<SumColumn 
						className={'sum__column column'}
						icon={Month} 
						title={'Доступно в месяц'}
					/>
					<SumColumn
						className={'sum__column column'} 
						icon={Day} 
						title={'Доступно в день'}
					/>
					<SumColumn
						className={'sum__column column'} 
						icon={MoneyBox} 
						title={'Накопится за год'}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainSum;