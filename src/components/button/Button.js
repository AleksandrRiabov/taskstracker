import PropsTypes from "prop-types";

const Button = ({text, background, onClick}) => {
	
	
	return (
	<button 
		style={{background: background}}
		className="btn"
		onClick={ onClick }>{ text }</button>
	)
}


Button.defaultProps ={
	text: "Ok",
	background: "teal",
	onClick: () => {console.log(" No Function asigned to btn")}
}

Button.propTypes = {
	text: PropsTypes.string,
	background: PropsTypes.string,
	onClick: PropsTypes.func
}

export default Button;