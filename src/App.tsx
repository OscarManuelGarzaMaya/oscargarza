/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import './App.css'
import './assets/globals.css'

// Components
import HeaderComponent from './sections/Header/Header.component'
import HeroComponent from './sections/Hero/Hero.component'
import AboutMeComponent from './sections/AboutMe/AboutMe.component'
import ProfessionalExperienceComponent from './sections/ProfessionalExperience/ProfessionalExperience.component'
import CoursesComponent from './sections/Courses/Courses.component'
import EducationComponent from './sections/Education/Education.component'
import ToolsComponent from './sections/Tools/Tools.component'
import FooterComponent from './sections/Footer/Footer.component'

// Libraries
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Assets
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import fr from './locales/fr/translation.json'

function App() {
	useEffect(() => {
		document.title = 'Oscar Garza | CV'
	}, [])

	i18next
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			fallbackLng: 'en',
			resources: {
				en: { translation: en },
				es: { translation: es },
				fr: { translation: fr },
			},
			supportedLngs: ['en', 'fr', 'es'],
			interpolation: { escapeValue: false },
			detection: {
				order: ['navigator'],
				caches: [],
			},
		})

	return (
		<div className="App">
			<HeaderComponent />
			<HeroComponent />
			<AboutMeComponent />
			<ProfessionalExperienceComponent />
			<CoursesComponent />
			<EducationComponent />
			<ToolsComponent />
			<FooterComponent />
		</div>
	)
}

export default App
