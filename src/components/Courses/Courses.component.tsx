// Styles
import './Courses.component.style.css'

// Assets
import leftsideChevron from '../../assets/images/LeftsideChevron.svg'
import rightsideChevron from '../../assets/images/RightsideChevron.svg'
import ReactLogo from '../../assets/images/courses/React.svg'
import HTMLLogo from '../../assets/images/courses/HTMLLogo.svg'
import CSSLogo from '../../assets/images/courses/CSSLogo.svg'
import JSLogo from '../../assets/images/courses/JSLogo.svg'
import TSLogo from '../../assets/images/courses/TSLogo.svg'
import mySQLLogo from '../../assets/images/courses/mySQLLogo.svg'

const CoursesComponent = () => {
	return (
		<div className="coursesContainer">
			<h1 className="coursesTitle">Courses & Training</h1>
			<div className="coursesContentContainer">
				<img
					src={leftsideChevron}
					alt="leftside chevron"
				/>
				<div className="coursesListContainer">
					<div className="courseContainer">
						<img
							src={ReactLogo}
							alt="React logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={HTMLLogo}
							alt="HTML logo"
						/>
						<p className="">HTML</p>
					</div>
					<div className="courseContainer">
						<img
							src={CSSLogo}
							alt="CSS logo"
						/>
						<p className="">CSS</p>
					</div>
					<div className="courseContainer">
						<img
							src={JSLogo}
							alt="JS logo"
						/>
						<p className="">Java Script</p>
					</div>
					<div className="courseContainer">
						<img
							src={TSLogo}
							alt="Typescript logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={mySQLLogo}
							alt="mySQL logo"
						/>
						<p className="">React Native</p>
					</div>
				</div>
				<img
					src={rightsideChevron}
					alt="rightside chevron"
				/>
			</div>
		</div>
	)
}

export default CoursesComponent
