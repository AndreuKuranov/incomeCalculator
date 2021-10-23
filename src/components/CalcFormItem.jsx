import React from "react";
import "./CalcFormItem.css"
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CalcFormItem = (props) => {
	return (
		<div className="calc__form-item">
			<MyInput 
				type="number" 
				placeholder={props.placeholder} 
				id={props.id}
			/>
			<MyButton 
				style={{borderRadius:' 0px 5px 5px 0px'}}
			>
				<span className="material-icons">delete</span>
			</MyButton>
		</div>
	);
}

export default CalcFormItem;