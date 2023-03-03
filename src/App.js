import React, { Fragment, Component, useState } from 'react';
import './App.css';
class App extends Component {
	render() {
		const name = 'john doe';
		const foo = () => 'Bar';
		const loading = true;
	
		return (
			<div className='App'>
				{loading?<h4>Hello {name}</h4>:<h4>loading..</h4>}
			</div>
		);
	}
}
export default App;
