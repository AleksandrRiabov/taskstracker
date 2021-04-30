import PropTypes from "prop-types";
import Task from "../task/Task";


const Tasks = ({tasks, onDelete, onToggleReminder}) => {

	return (
	   <div className="tasks">
		{ tasks.map((task)=> {
				return (
					<Task
						key={task.id}
						task={task} 
						onDelete={onDelete}
						onToggleReminder={onToggleReminder}/>
				)
			}) }
		</div>
	)
}

Tasks.defaultProps ={
	tasks: []
}

Tasks.propsTypes = {
	tasks: PropTypes.array
}

export default Tasks;