// import React from 'react';
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// You can only return 1 parent element within a function
// We can perform JS operations within the function

function App() {

  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: "Code",
      day: "2Day",
      reminder: false,
    },
  ]
);

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );

}



// Example of using a class instead of a function

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class!</h1>
//   }
// }

export default App;
