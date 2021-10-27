import React from 'react';
import BlockInput from './BlockInput';
import './MainCalc.css';

const MainCalc = (props) => {

	const incomes = [
		{id: 'income1', placeholder: 'Зарплата', value: 0},
		{id: 'income2', placeholder: 'Подработка', value: 0},
		{id: 'income3', placeholder: 'Доп. доходы', value: 0},
		{id: 'income4', placeholder: 'Доп. доходы', value: 0}
    ];

	const expenses = [
		{id: 'expense1', placeholder: 'ЖКХ', value: 0},
		{id: 'expense2', placeholder: 'Мобильная связь', value: 0},
		{id: 'expense3', placeholder: 'Домашний интернет', value: 0},
		{id: 'expense4', placeholder: 'Кредит', value: 0}
    ];

	return (
		<div className={`calc ${props.className}`}>
			<div className='calc__container container'>
				<div className='calc__body'>
					<BlockInput
						className='calc__block'
						title='Доходы в месяц'
						values={incomes}
					/>
					<BlockInput
						className='calc__block'
						title='Расходы в месяц'
						values={expenses}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainCalc;
