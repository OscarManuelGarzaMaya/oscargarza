// Styles
import './ProfessionalExperience.component.style.css'

// Assets
import firstEnterpriseLogo from '../../assets/images/professionalExperiences/firstEnterpriseLogo.svg'
import secondEnterpriseLogo from '../../assets/images/professionalExperiences/secondEnterpriseLogo.svg'
import thirdEnterpriseLogo from '../../assets/images/professionalExperiences/thirdEnterpriseLogo.svg'
import CardComponent from '../Card/Card.component'

// Librry
import { useTranslation } from 'react-i18next'

const ProfessionalExperienceComponent = () => {
	const { t } = useTranslation()

	return (
		<section className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">{t(['professionalExperience.title'])}</h1>
			<div className="cardsContainer">
				<CardComponent
					enterpriseLogo={firstEnterpriseLogo}
					enterpriseTitle="SOLMETI"
					positionTitle={t(['professionalExperience.jobs.SOLEMTI.position'])}
					date={t(['professionalExperience.jobs.SOLEMTI.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.SOLEMTI.description.firstParagraph'])}
						<b>REACT.</b> <br />
						{t(['professionalExperience.jobs.SOLEMTI.description.secondParagraph'])}
					</p>
				</CardComponent>
				<CardComponent
					enterpriseLogo={secondEnterpriseLogo}
					enterpriseTitle="RESSER"
					positionTitle={t(['professionalExperience.jobs.RESSER.position'])}
					date={t(['professionalExperience.jobs.RESSER.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.RESSER.description.firstParagraph'])}
						<b>React, C#</b>
						{t(['professionalExperience.jobs.RESSER.description.secondParagraph'])}
						<b>SQL</b>. <br />
						{t(['professionalExperience.jobs.RESSER.description.thirdParagraph'])}
					</p>
				</CardComponent>
				<CardComponent
					enterpriseLogo={thirdEnterpriseLogo}
					enterpriseTitle={'IO CONNECT SERVICES'}
					positionTitle={t([
						'professionalExperience.jobs.ioConnectServices.position',
					])}
					date={t(['professionalExperience.jobs.ioConnectServices.date'])}
				>
					<p>
						{t([
							'professionalExperience.jobs.ioConnectServices.description.firstParagraph',
						])}
						<b>Angular</b>
						{t([
							'professionalExperience.jobs.ioConnectServices.description.secondParagraph',
						])}
						<b>PHP. </b>
						{/* <br /> */}
						{t([
							'professionalExperience.jobs.ioConnectServices.description.thirdParagraph',
						])}
						<b>React Native</b>
						{t([
							'professionalExperience.jobs.ioConnectServices.description.forthParagraph',
						])}
					</p>
				</CardComponent>
			</div>
		</section>
	)
}

export default ProfessionalExperienceComponent
