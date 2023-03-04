import React, { Fragment, Component, useState } from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/layout/Navbar';
class App extends Component {
	render() {
	
	
		return (
			<div className='App'>
				
        <Navbar />
				<Users/>
			</div>
		);
	}
}
export default App;
