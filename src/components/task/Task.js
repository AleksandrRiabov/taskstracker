import {FaTimes} from "react-icons/fa";


const Task = ({task, onDelete, onToggleReminder}) => {
	
	const {id, day, text, reminder} = task;
	
	return (
	    <div className={`task ${reminder ? "reminder" : null}`} onDoubleClick={() => onToggleReminder(id)}  >
		   <h3>{text} <FaTimes style={{color: "red"}} onClick={() => onDelete(id)}/></h3>
			<p>{day}</p>
			
		</div>
	)
}


export default Task;