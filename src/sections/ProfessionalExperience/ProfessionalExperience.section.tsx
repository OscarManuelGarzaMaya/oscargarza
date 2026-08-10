// Styles
import './ProfessionalExperience.section.style.css'

// Assets
import ezPDFLogo from '../../assets/images/professionalExperiences/ezPdf_logo.png'
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

const ProfessionalExperienceSection = () => {
	const { t } = useTranslation()

	return (
		<section className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">{t(['professionalExperience.title'])}</h1>
			<div className="cardsContainer">
				<CardComponent
					title="EZ-PDF"
					logo={ezPDFLogo}
					heading={t(['professionalExperience.jobs.ezpdf.position'])}
					date={t(['professionalExperience.jobs.ezpdf.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.ezpdf.description.firstParagraph'])}
						<b>React Native, TypeScript, Expo</b>
						{t(['professionalExperience.jobs.ezpdf.description.secondParagraph'])}
						<b>
							<u style={{ cursor: 'default' }}>Anthropic Claude API</u>
						</b>
						{t(['professionalExperience.jobs.ezpdf.description.thirdParagraph'])}
						<b>Supabase Edge Functions.</b>
					</p>
				</CardComponent>
				<CardComponent
					logo={solemtiLogo}
					title="SOLEMTI"
					heading={t(['professionalExperience.jobs.SOLEMTI.position'])}
					date={t(['professionalExperience.jobs.SOLEMTI.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.SOLEMTI.description.firstParagraph'])}
						<b>Rect y Stripe.</b>
					</p>
				</CardComponent>
				<CardComponent
					logo={reseerLogo}
					title="RESSER"
					heading={t(['professionalExperience.jobs.RESSER.position'])}
					date={t(['professionalExperience.jobs.RESSER.date'])}
				>
					<ul>
						<li>
							<p>
								{t(['professionalExperience.jobs.RESSER.description.firstParagraph'])}
							</p>
						</li>
						<li>
							<p>
								{t(['professionalExperience.jobs.RESSER.description.secondParagraph'])}
							</p>
						</li>
						<li>
							<p>
								{t(['professionalExperience.jobs.RESSER.description.thirdParagraph'])}
							</p>
						</li>
					</ul>
				</CardComponent>
				<CardComponent
					logo={iotacLogo}
					title={'IOTAC'}
					heading={t(['professionalExperience.jobs.iotac.position'])}
					date={t(['professionalExperience.jobs.iotac.date'])}
				>
					<ul>
						<li>
							<p>
								{t(['professionalExperience.jobs.iotac.description.firstParagraph'])}
							</p>
						</li>
						<li>
							<p>
								{t(['professionalExperience.jobs.iotac.description.secondParagraph'])}
							</p>
						</li>
					</ul>
				</CardComponent>
				<CardComponent
					logo={thirdEnterpriseLogo}
					title={'IO Connect Services'}
					heading={t(['professionalExperience.jobs.ioConnectServices.position'])}
					date={t(['professionalExperience.jobs.ioConnectServices.date'])}
				>
					<ul>
						<li>
							<p>
								{t([
									'professionalExperience.jobs.ioConnectServices.description.firstParagraph',
								])}
							</p>
						</li>
						<li>
							<p>
								{t([
									'professionalExperience.jobs.ioConnectServices.description.secondParagraph',
								])}
							</p>
						</li>
					</ul>
				</CardComponent>
				<CardComponent
					logo={deloitteLogo}
					title="DELOITTE"
					heading={t(['professionalExperience.jobs.deloitte.position'])}
					date={t(['professionalExperience.jobs.deloitte.date'])}
				>
					<p>
						{t(['professionalExperience.jobs.deloitte.description.firstParagraph'])}
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
					</p>
				</CardComponent>
			</div>
		</section>
	)
}

export default ProfessionalExperienceSection
