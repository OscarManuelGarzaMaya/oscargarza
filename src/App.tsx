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

function App() {
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
