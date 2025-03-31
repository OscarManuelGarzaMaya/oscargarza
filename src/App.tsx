import React from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/Button.component'

function App() {
	return (
		<div className="App">
			<header className="header">
				<ButtonComponent />
				<ButtonComponent />
				<ButtonComponent />
				<ButtonComponent />
			</header>
		</div>
	)
}

export default App
