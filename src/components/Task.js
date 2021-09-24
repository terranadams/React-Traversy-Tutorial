import { FaTimes } from 'react-icons/fa';


const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ // must call anonymous function and call onDelete within it
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
