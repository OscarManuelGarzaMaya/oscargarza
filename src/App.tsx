import './App.css'
import ButtonComponent from './components/Button/Button.component'
import HelloComponent from './components/Hello/Hello.component'
import dictionary from './dictionary.json'

function App() {
	return (
		<div className="App">
			<header className="header">
				<ButtonComponent text={dictionary.header.buttons.aboutMe} />
				<ButtonComponent text={dictionary.header.buttons.projects} />
				<ButtonComponent text={dictionary.header.buttons.studies} />
				<ButtonComponent text={dictionary.header.buttons.contactMe} />
			</header>
			<HelloComponent />
		</div>
	)
}

export default App
