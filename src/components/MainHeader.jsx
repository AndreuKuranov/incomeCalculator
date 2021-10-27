import React from "react";
import "./MainHeader.css"

const Header = (props) => {
	return (
		<div className={`header ${props.className}`}>
			<div className='header__container container'>
				<h1 className='header__title'>Калькулятор доходов</h1>
			</div>
		</div>
	);
}

export default Header;
