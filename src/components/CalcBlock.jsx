import React from "react";
import "./CalcBlock.css";
import CalcFormItem from "./CalcFormItem";
import MyButton from "./UI/button/MyButton";

const CalcBlock = (props) => {

	return (
		<div className={props.className}>
			<h2 className="block__title">{props.title}</h2>
			<form className="block__form" >
				{props.values.map(value => 
					<CalcFormItem
						className={'block__item item'}
						id={value.id} 
						placeholder={value.placeholder} 
						key={value.id}
					/>
				)}
				<div className="block__item block__item-button">
					<MyButton 
						style={{margin: '0 5px'}} 
						type="reset"
					>
						Сбросить
					</MyButton>
					<MyButton 
						style={{margin: '0 5px'}}
					>
						Добавить поле
					</MyButton>
				</div>
			</form>
		</div>
	);
}

export default CalcBlock;