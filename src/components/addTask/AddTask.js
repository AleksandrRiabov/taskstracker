import {useState} from "react";



const AddTask = ({onChange, dayInput, textInput, addTask}) => {
	
	const [text, setTask] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);
	
	const createTask = (e) => {
			e.preventDefault();
		
		if (!text) {
			alert("Please add the Task!")
			return
		} else if (!day) {
			alert("Please insert Day");
			return
		}
	    
		const id = Math.floor(Math.random() * 10000);
		const newTask = {
			text, day, reminder, id
		}
		
		addTask(newTask);
		setTask("");
		setDay("");
		setReminder(false);
	}
	
	
	return (
	   <form className="add-form" onSubmit={((e) => createTask(e))} >
			<div className="form-control">
			  <label>Task</label>
				<input type="text" value={text} placeholder="Task" onChange={(e) => {setTask(e.target.value)}}/>
			</div>
			
			<div className="form-control">
			  <label>Day & Time</label>
				<input type="text" value={day} placeholder="Add Day and Time" onChange={(e) => {setDay(e.target.value)}}/>
			</div>
			
			<div className="form-control-check">
			  <label>Set Reminder</label>
				<input type="checkbox" value={reminder} onChange={(e) => {setReminder(e.target.checked)}}/>
			</div>
			<input className="btn btn-block" type="submit" value="Save Task"/>
			
	   </form>
	)
}


export default AddTask;