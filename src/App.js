// import React from 'react'; this line is only needed if the component is a class component
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([ // State is immutible, using tasks.push() would not work.
    // Instead you would use setTask([...tasks, {another object}]) to recreate state using the spread operator.
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
])

// Delete task
const deleteTask = (id) => {
  setTasks(
    tasks.filter(task => id !== task.id)
  )
}

  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks.'}
    </div> // ternary operator for showing a message when there aren't any tasks.
  );
}

// const x = true
  // const name = 'Peter'
  // return (
  //   <div className="container">
  //    <Header title={name} />
  //    <div>{x ? "YAYY I'M TRUE :)" : "Dagnabit, I'm false."}</div>
  //    <div>{x && "Lifes good"}</div>
  //   </div>
  // );

// class App extends React.Component {
//   render()  {
//     return (
//       <>
//     <h1>Hello from a class</h1>
//     <Header />
//     </>
//     )
//   }
// }

export default App;
