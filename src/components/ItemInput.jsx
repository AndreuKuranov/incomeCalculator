import React from "react";
import "./ItemInput.css"
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const ItemInput = (props) => {
	return (
		<div className={props.className}>
			<MyInput
				type="number"
				placeholder={props.placeholder}
				id={props.id}
			/>
			<MyButton
				// это недопустимо, все стили должны быть в css файлах
				style={{borderRadius:' 0px 5px 5px 0px'}}
			>
				<span className="material-icons">delete</span>
			</MyButton>
		</div>
	);
}

export default ItemInput;
