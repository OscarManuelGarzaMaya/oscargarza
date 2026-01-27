// Styles
import './ProfessionalExperience.component.style.css'

// Assets
import solemtiLogo from '../../assets/images/professionalExperiences/solemti_logo.jpg'
import reseerLogo from '../../assets/images/professionalExperiences/resser_tecnologias_logo.jpg'
import iotacLogo from '../../assets/images/professionalExperiences/iotacLogo.jpg'
import deloitteLogo from '../../assets/images/professionalExperiences/deloitte_logo.jpg'
import geotecoLogo from '../../assets/images/professionalExperiences/geoteco_logo.jpg'
import thirdEnterpriseLogo from '../../assets/images/professionalExperiences/thirdEnterpriseLogo.svg'

// Components
import CardComponent from '../../components/Card/Card.component'

// Librry
import { useTranslation } from 'react-i18next'

const ProfessionalExperienceComponent = () => {
	const { t } = useTranslation()

	return (
		<section className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">{t(['professionalExperience.title'])}</h1>
			<div className="cardsContainer">
				<CardComponent
					logo={solemtiLogo}
					title="SOLMETI"
					heading={t(['professionalExperience.jobs.SOLEMTI.position'])}
					date={t(['professionalExperience.jobs.SOLEMTI.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.SOLEMTI.description.firstParagraph'])}
						<b>REACT.</b> <br />
						{t(['professionalExperience.jobs.SOLEMTI.description.secondParagraph'])}
					</p>
				</CardComponent>
				<CardComponent
					logo={reseerLogo}
					title="RESSER"
					heading={t(['professionalExperience.jobs.RESSER.position'])}
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
					logo={iotacLogo}
					title={'IOTAC'}
					heading={t(['professionalExperience.jobs.iotac.position'])}
					date={t(['professionalExperience.jobs.iotac.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.iotac.description.firstParagraph'])}
						<b>React Native</b>
					</p>
				</CardComponent>
				<CardComponent
					logo={thirdEnterpriseLogo}
					title={'IO CONNECT SERVICES'}
					heading={t(['professionalExperience.jobs.ioConnectServices.position'])}
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
						{t([
							'professionalExperience.jobs.ioConnectServices.description.thirdParagraph',
						])}
						<b>React Native</b>
						{t([
							'professionalExperience.jobs.ioConnectServices.description.forthParagraph',
						])}
					</p>
				</CardComponent>
				<CardComponent
					logo={deloitteLogo}
					title="DELOITTE"
					heading={t(['professionalExperience.jobs.deloitte.position'])}
					date={t(['professionalExperience.jobs.deloitte.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.deloitte.description.firstParagraph'])}
						<b>Java</b>
					</p>
				</CardComponent>
				<CardComponent
					logo={geotecoLogo}
					title="GEOTECO"
					heading={t(['professionalExperience.jobs.geoteco.position'])}
					date={t(['professionalExperience.jobs.geoteco.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.geoteco.description.firstParagraph'])}
						<b>PHP</b>
					</p>
				</CardComponent>
			</div>
		</section>
	)
}

export default ProfessionalExperienceComponent
