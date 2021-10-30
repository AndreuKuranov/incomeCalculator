import React, {useState} from "react";
import BlockInput from './BlockInput';
import './MainCalc.css';
import translate from "../i18n/translate";

const MainCalc = (props) => {

	console.log(translate('hello'));

	const [incomes, setIncomes] = useState([
		{id: 'income1', placeholder: translate('hello'), value: 0},
		{id: 'income2', placeholder: 'Подработка', value: 0},
		{id: 'income3', placeholder: 'Доп. доходы', value: 0},
		{id: 'income4', placeholder: 'Доп. доходы', value: 0}
    ])

	const [expenses, setExpenses] = useState([
		{id: 'expense1', placeholder: 'ЖКХ', value: 0},
		{id: 'expense2', placeholder: 'Мобильная связь', value: 0},
		{id: 'expense3', placeholder: 'Домашний интернет', value: 0},
		{id: 'expense4', placeholder: 'Кредит', value: 0}
    ])

	return (
		<div className={`calc ${props.className}`}>
			<div className='calc__container container'>
				<div className='calc__body'>
					<BlockInput
						className='calc__block'
						title={translate('incomes')}
						values={incomes}
					/>
					<BlockInput
						className='calc__block'
						title={translate('expenses')}
						values={expenses}
					/>
				</div>
			</div>
		</div>
	);
}

export default MainCalc;
