import React, { Fragment,Component, useState } from 'react';
import './App.css';
class App extends Component {
render(){
	const name='john doe'
  return (
    <div className="App">
     <h1>Hello {name.toUpperCase()}</h1>
    </div>

   );
}


}
export default App;
