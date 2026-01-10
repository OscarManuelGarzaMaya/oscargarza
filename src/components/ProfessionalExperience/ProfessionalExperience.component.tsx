// Styles
import './ProfessionalExperience.component.style.css'

// Assets
import firstEnterpriseLogo from '../../assets/images/professionalExperiences/firstEnterpriseLogo.svg'
import secondEnterpriseLogo from '../../assets/images/professionalExperiences/secondEnterpriseLogo.svg'
import thirdEnterpriseLogo from '../../assets/images/professionalExperiences/thirdEnterpriseLogo.svg'

const ProfessionalExperienceComponent = () => {
	return (
		<div className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">Professional Experience</h1>
			<div className="cardsContainer">
				<div className="card">
					<div className="enterpriseContainer">
						<img
							src={firstEnterpriseLogo}
							alt="Enterprise Logo"
						/>
						<h2>test</h2>
					</div>
					<div className="jobDataContainer">
						<h3 className="poistionTitle">Web Developer</h3>
						<p className="positionDate">April 2025 - Present</p>
					</div>
					<div className="jobDescription">
						<p>
							Developed custom client-side solutions using <b>REACT.</b> <br />
							Implemented mono-repo structures to improve scalability and maintenance.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="enterpriseContainer">
						<img
							src={thirdEnterpriseLogo}
							alt="Enterprise Logo"
						/>
						<h2>RESSER</h2>
					</div>
					<div className="jobDataContainer">
						<h3 className="poistionTitle">Web Developer (Full-Stack)</h3>
						<p className="positionDate">Aug 2023 - Aug 2024</p>
					</div>
					<div className="jobDescription">
						<p>
							Developed internal systems using <b>React, C#</b> and <b>SQL</b>. <br />
							Proposed and implemented Smart Components standards for large-scale
							projects.
						</p>
					</div>
				</div>
				<div className="card">
					<div className="enterpriseContainer">
						<img
							src={secondEnterpriseLogo}
							alt="Enterprise Logo"
						/>
						<h2>IO CONNECT SERVICES</h2>
					</div>
					<div className="jobDataContainer">
						<h3 className="poistionTitle">Web Developer</h3>
						<p className="positionDate">April 2025 - Present</p>
					</div>
					<div className="jobDescription">
						<p>
							Maintained and updated enterprise websites using <b>Angular</b> and{' '}
							<b>PHP.</b>
							<br />
							Developed mobile solutions with <b>React Native</b> for a banking
							startup.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfessionalExperienceComponent
