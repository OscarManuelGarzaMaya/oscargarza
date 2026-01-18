import './App.css'
import './assets/globals.css'

// Components
import HeaderComponent from './components/Header/Header.component'
import HeroComponent from './components/Hero/Hero.component'
import AboutMeComponent from './components/AboutMe/AboutMe.component'
import ProfessionalExperienceComponent from './components/ProfessionalExperience/ProfessionalExperience.component'
import CoursesComponent from './components/Courses/Courses.component'
import EducationComponent from './components/Education/Education.component'
import ToolsComponent from './components/Tools/Tools.component'
import FooterComponent from './components/Footer/Footer.component'

// Libraries
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Assets
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import fr from './locales/fr/translation.json'

function App() {
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
