// import React from 'react';
import Header from "./components/Header";

// You can only return 1 parent element within a function
// We can perform JS operations within the function

function App() {

  return (
    <div className="container">
      <Header title='Hello'/>
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
