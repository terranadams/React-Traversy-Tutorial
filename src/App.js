// import React from 'react'; this line is only needed if the component is a class component
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  // const x = true
  // const name = 'Peter'
  // return (
  //   <div className="container">
  //    <Header title={name} />
  //    <div>{x ? "YAYY I'M TRUE :)" : "Dagnabit, I'm false."}</div>
  //    <div>{x && "Lifes good"}</div>
  //   </div>
  // );

  return (
    <div className="container">
     <Header />
     <Tasks />
    </div>
  );
}

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
