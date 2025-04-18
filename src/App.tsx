import { useState } from 'react'

import './App.css'
import './assets/globals.css'

// Assets
import typing from './assets/gifs/typing.gif'
import HeaderComponent from './components/Header/Header.component'
import profilePic from './assets/images/perfil.png'
import placeholder from './assets/images/placeholder.jpg'

// Misc
import dictionary from './dictionary.json'

function App() {
	const [titles, setTitles] = useState([
		{
			id: 1,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
		{
			id: 2,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
		{
			id: 1,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
		{
			id: 2,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
		{
			id: 1,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
		{
			id: 2,
			title: 'GIT+GitHub: Todo un sistema de control de versiones de cero',
			description:
				'Aprendí la gestion de proyectos y manejo de historicos del proyecto.',
			image: placeholder,
		},
	])

	const titleOrganizer = () => {
		return 0
	}

	return (
		<div className="App">
			<HeaderComponent />
			<div className="profilePicContainer">
				<img
					src={profilePic}
					alt="imagenDePerfil"
					className="profilePic"
				/>
				<div className="profilePicBackground"></div>
			</div>
			<div className="titleContainer">
				<div className="genericStyles titleMessage genericShadow">
					{dictionary.hello.title}
				</div>
			</div>
			<div className="typingContainer">
				<img
					src={typing}
					alt="Typing"
					className="typing genericShadow"
				/>
			</div>
			<div className="softwareDeveloperContainer genericStyles genericShadow">
				<p>{dictionary.experience.description}</p>
			</div>
			<div className="technologiesContainer">
				<div className="frontEndTechsContainer">
					<div className="frontEndTechsTitle genericShadow">
						<p>{dictionary.techs.frontend}</p>
					</div>
					<div className="techsList frontEndTechsListContainer">
						<p>React</p>
						<p>React Native</p>
						<p>JavaScript</p>
						<p>TypeScript</p>
					</div>
				</div>
				<div className="backEndTechsContainer">
					<div className="backEndTechsTitle genericShadow">
						<p>{dictionary.techs.backend}</p>
					</div>
					<div className="techsList backEndTechsListContainer">
						<p>C#</p>
						<p>.NET</p>
					</div>
				</div>
				<div className="dbTechsContainer">
					<div className="dbTechsTitle genericShadow">
						<p>{dictionary.techs.databases}</p>
					</div>
					<div className="techsList dbTechsListContainer">
						<p>MySQL</p>
						<p>SQL Server</p>
						<p>MSSQL</p>
					</div>
				</div>
			</div>
			<div className="studiesContainer">
				<div className="studiesTitle genericStyles">
					<p>Constantemente me estoy capacitando</p>
				</div>
				<div className="studiesTitlesContainer">
					{titles.map((title) =>
						title.id % 2 ? (
							<div
								key={title.id}
								className="titleListItemContainer"
							>
								<img
									src={title.image}
									alt={title.image}
									className="titleImage"
								/>
								<div>
									<p className="titleTitleDescription">
										{title.title.length > 30 ? (
											<>
												{title.title.slice(0, 30)} <br />
												{title.title.slice(30)}
											</>
										) : (
											title.title
										)}
									</p>
									<p className="titleDescription">
										{title.description.length > 30 ? (
											<>
												{title.description.slice(0, 31)} <br />
												{title.description.slice(31)}
											</>
										) : (
											title.description
										)}
									</p>
								</div>
							</div>
						) : (
							<div
								key={title.id}
								className="titleListItemContainer"
							>
								<div>
									<p className="titleTitleDescription">
										{title.title.length > 30 ? (
											<>
												{title.title.slice(0, 30)} <br />
												{title.title.slice(30)}
											</>
										) : (
											title.title
										)}
									</p>
									<p className="titleDescription">
										{title.description.length > 30 ? (
											<>
												{title.description.slice(0, 31)} <br />
												{title.description.slice(31)}
											</>
										) : (
											title.description
										)}
									</p>
								</div>
								<img
									src={title.image}
									alt={title.image}
									className="titleImage"
								/>
							</div>
						),
					)}
				</div>
			</div>
			{/* <div style={{ backgroundColor: 'lightgreen' }}>4</div>
			<div style={{ backgroundColor: 'lightyellow' }}>5</div>
			<div style={{ backgroundColor: 'lightcoral' }}>6</div>
			<div style={{ backgroundColor: 'lightpink' }}>7</div>
			<div style={{ backgroundColor: 'lightgray' }}>8</div>
			<div style={{ backgroundColor: 'lightpink' }}>9</div>
			<div style={{ backgroundColor: 'lightgray' }}>10</div>
			<div style={{ backgroundColor: 'lightblue' }}>11</div>
			<div style={{ backgroundColor: 'lightgreen' }}>12</div>
			<div style={{ backgroundColor: 'lightyellow' }}>13</div>
			<div style={{ backgroundColor: 'lightcoral' }}>14</div>
			<div style={{ backgroundColor: 'lightpink' }}>15</div>
			<div style={{ backgroundColor: 'lightgray' }}>16</div> */}
			{/* <div className="softwareDeveloperContainer">
				<p>Soy desarrallodaro web con experiencia en...</p>
			</div> */}
		</div>
	)
}

export default App
