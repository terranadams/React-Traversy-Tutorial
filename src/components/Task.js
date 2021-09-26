import { FaTimes } from 'react-icons/fa';


const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ // must call anonymous function to call functions levels above
                color: 'red',
                cursor: 'pointer'
            }}/></h3>
            <p>{task.day}</p>
        </div>
    )
}
/*
Create the prop for an individual task here, and extract the id and text properties
to be used in the component display.
*/

export default Task
