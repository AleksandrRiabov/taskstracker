import Header from "./components/header/Header.js";
import Tasks from "./components/tasks/Tasks.js";
import AddTask from "./components/addTask/AddTask";
import { useState } from "react";

function App() {

	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState( [
      {
		id: 1,
		text: "Hello from 1 task",
		day: "Monday",
		reminder: true
	},
	{
		id: 2,
		text: "Hello from 2 task",
		day: "Tuesday",
		reminder: true
	},
	{
		id: 3,
		text: "Hello from 2 task",
		day: "Wednesday",
		reminder: false
	}
  ]);
	
	const toggleAddTask = () => {
		setShowAddTask(!showAddTask)
	}
	
	const onDelete = (id) => {
	   const updatedTasks = tasks.filter(task => task.id !== id);
		setTasks(updatedTasks);
	}
	
	
	
	
	const onToggleReminder = (id) => {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {...task, reminder: !task.reminder}
			} 
			return task
		}))
	}
	
	const addTask = (task) => {
		setTasks([...tasks, task])
	}
	
	
	
  return (
    <div className="container">
		  <Header showAdd={showAddTask} toggleAddTask={toggleAddTask}/>
		 {showAddTask && <AddTask addTask={addTask}/>}
		  {tasks.length ? <Tasks tasks={tasks} 
							  onDelete={onDelete}
							  onToggleReminder={onToggleReminder}/>: "No Tasks To Show.."}
    </div>
  );
}

export default App;
