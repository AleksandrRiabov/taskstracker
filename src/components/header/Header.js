import PropsTypes from "prop-types";
import Button from "../button/Button.js";

const Header = ({ showAdd, toggleAddTask }) => {
	
	
	 return (
	 <header className="header">
		 <h1>Tasks Tracker</h1>
		<Button text={showAdd ? "Close" : "Add"} background={showAdd ? "red" : "green"} onClick={toggleAddTask}/>
	 </header>
	 )
 }


Header.defaultProps ={
	title: "Hello from def props"
}


Header.propTypes ={
	title: PropsTypes.string.isRequired
}
 export default Header;

