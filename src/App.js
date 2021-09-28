// import React from 'react'; this line is only needed if the component is a class component
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

// Add task (FIX ME, make sure I don't get double IDs generated)
const addTask = (task) => {
  let id = Math.floor(Math.random() * 100) + 1
  if (tasks.filter(task => task.id === id).length > 0) {
      console.log('Double uniquie ID was generated, try again.')
      return
  } else {
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(id)
    }
  }

  

// Delete task
const deleteTask = (id) => {
  setTasks(
    tasks.filter(task => id !== task.id)
  )
}

// Toggle reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
 }// we map through the tasks until we find the one that is selected, use the spread operator to pin down the reminder property
 // and set it opposite to whatever it was before.

  return (
    <Router>
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     <Route path='/' exact render={(props) => (
       <>
       {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show.'}
       </>
     )} />
     <Route path='/about' component={About} />
    <Footer />
    </div> 
    </Router>
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
