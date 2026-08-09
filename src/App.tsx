/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import './App.css'
import './assets/globals.css'

// Sections
import HeaderSection from './sections/Header/Header.section'
import HeroSection from './sections/Hero/Hero.section'
import AboutMeSection from './sections/AboutMe/AboutMe.section'
import ProfessionalExperienceSection from './sections/ProfessionalExperience/ProfessionalExperience.section'
import PersonalProjectsSection from './sections/PersonalProjects/PersonalProjects.section'
import CoursesSection from './sections/Courses/Courses.section'
import EducationSection from './sections/Education/Education.section'
import ToolsComponent from './sections/Tools/Tools.section'
import FooterSection from './sections/Footer/Footer.section'

// Libraries
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Assets
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import fr from './locales/fr/translation.json'
import ProfilesComponent from './components/Profiles/Profiles.component'

// Custom hooks
import { useMediaQuery } from './hooks/useMediaQuery'

function App() {
	useEffect(() => {
		document.title = 'Oscar Garza | CV'
	}, [])

	const isDesktop = useMediaQuery('(min-width: 1400px)')

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
			<HeaderSection />
			<HeroSection />
			<AboutMeSection />
			<ProfessionalExperienceSection />
			<CoursesSection />
            <PersonalProjectsSection />
			<EducationSection />
			<ToolsComponent />
			{!isDesktop ? (
				<div className="desktopProfilesContainer">
					<ProfilesComponent />
				</div>
			) : (
				<></>
			)}

			<FooterSection />
		</div>
	)
}

export default App
