import React from "react";
import "./CalcBlock.css";
import CalcFormItem from "./CalcFormItem";
import MyButton from "./UI/button/MyButton";

const CalcBlock = (props) => {

	return (
		<div className="calc__block-inputs" >
			<h2 className="calc__title">{props.title}</h2>
			<form className="calc__form" >
				{props.values.map(value => 
					<CalcFormItem 
						id={value.id} 
						placeholder={value.placeholder} 
						key={value.id}
					/>
				)}
				<div className="calc__form-item calc__form-item-button">
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