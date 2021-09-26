import Task from './Task'
const Tasks = (props) => { 
    
    return (
        <>
            {props.tasks.map(task => <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>)}
        </>
    ) // onDelete prop is demonstrated in both different uses on Task and Tasks (with props attribute and with {} attribute)
    // as it gets passed up through the components to state, where it gets used.
}

/* 
'task={' is the prop created in the Task component, but the {task} passed in is
still just a temporary place holder for the task that gets passed in in the future.
*/

export default Tasks
