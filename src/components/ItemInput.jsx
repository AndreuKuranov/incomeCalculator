import React from "react";
import "./ItemInput.css";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const ItemInput = (props) => {
	return (
		<div className={`item ${props.className}`}>
			<MyInput
				className='item__input'
				type='number'
				placeholder={props.placeholder}
				id={props.id}
			/>
			<MyButton
				className='item__button'
				type='button'
			>
				<span className='material-icons'>delete</span>
			</MyButton>
		</div>
	);
}

export default ItemInput;
