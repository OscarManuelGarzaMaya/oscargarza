import { useState } from 'react'

import './App.css'
import './assets/globals.css'

// Assets
import placeholder from './assets/images/HeroImage.svg'

// Components
import HeaderComponent from './components/Header/Header.component'
import HeroComponent from './components/Hero/Hero.component'
import AboutMeComponent from './components/AboutMe/AboutMe.component'
import ProfessionalExperienceComponent from './components/ProfessionalExperience/ProfessionalExperience.component'

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
			<HeroComponent />
			<AboutMeComponent />
			<ProfessionalExperienceComponent />
		</div>
	)
}

export default App
