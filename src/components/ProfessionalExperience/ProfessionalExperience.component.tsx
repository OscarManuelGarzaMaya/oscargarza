// Styles
import './ProfessionalExperience.component.style.css'

// Misc
import dictionary from '../../dictionary.json'

// Assets
import firstEnterpriseLogo from '../../assets/images/professionalExperiences/firstEnterpriseLogo.svg'
import secondEnterpriseLogo from '../../assets/images/professionalExperiences/secondEnterpriseLogo.svg'
import thirdEnterpriseLogo from '../../assets/images/professionalExperiences/thirdEnterpriseLogo.svg'
import CardsComponent from '../Cards/Cards.component'

const ProfessionalExperienceComponent = () => {
	return (
		<div className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">{dictionary.proffesionalExperience.title}</h1>
			<div className="cardsContainer">
				<CardsComponent
					enterpriseLogo={firstEnterpriseLogo}
					enterpriseTitle="SOLMETI"
					positionTitle="Web Developer"
					date="April 2025 - Present"
				>
					<p>
						Developed custom client-side solutions using <b>REACT.</b> <br />
						Implemented mono-repo structures to improve scalability and maintenance.
					</p>
				</CardsComponent>
				<CardsComponent
					enterpriseLogo={secondEnterpriseLogo}
					enterpriseTitle="RESSER"
					positionTitle="Web Developer (Full-Stack)"
					date="Aug 2023 - Aug 2024"
				>
					<p>
						Developed internal systems using <b>React, C#</b> and <b>SQL</b>. <br />
						Proposed and implemented Smart Components standards for large-scale
						projects.
					</p>
				</CardsComponent>
				<CardsComponent
					enterpriseLogo={thirdEnterpriseLogo}
					enterpriseTitle="IO CONNECT SERVICES"
					positionTitle="Web & Mobile App Developer"
					date="Oct 2021 - April 2023"
				>
					<p>
						Maintained and updated enterprise websites using <b>Angular</b> and{' '}
						<b>PHP.</b>
						<br />
						Developed mobile solutions with <b>React Native</b> for a banking startup.
					</p>
				</CardsComponent>
			</div>
		</div>
	)
}

export default ProfessionalExperienceComponent
