const tasks = [
    {
        id: 1,
        text: "Work",
        day: "Monday",
        reminder: false
    },
    {
        id: 2,
        text: "Skate",
        day: "Tuesday",
        reminder: false
    },
    {
        id: 3,
        text: "Code",
        day: "Wednesday",
        reminder: true
    },
    {
        id: 4,
        text: "Snuggle",
        day: "Thursday",
        reminder: true
    }
]

const Tasks = () => {
    return (
        <div>
            {tasks.map(x => <h3 key={x.id}>{x.text}</h3>)}
        </div>
    )
}

export default Tasks
