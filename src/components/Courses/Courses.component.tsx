// Styles
import './Courses.component.style.css'

// Assets
import leftsideChevron from '../../assets/images/LeftsideChevron.svg'
import rightsideChevron from '../../assets/images/RightsideChevron.svg'
import ReactLogo from '../../assets/images/courses/React.svg'

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
							src={ReactLogo}
							alt="React logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={ReactLogo}
							alt="React logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={ReactLogo}
							alt="React logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={ReactLogo}
							alt="React logo"
						/>
						<p className="">React Native</p>
					</div>
					<div className="courseContainer">
						<img
							src={ReactLogo}
							alt="React logo"
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
