// Styles
import './ProfessionalExperience.section.style.css'

// Assets
import solemtiLogo from '../../assets/images/professionalExperiences/solemti_logo.jpg'
import reseerLogo from '../../assets/images/professionalExperiences/resser_tecnologias_logo.jpg'
import iotacLogo from '../../assets/images/professionalExperiences/iotacLogo.jpg'
import deloitteLogo from '../../assets/images/professionalExperiences/deloitte_logo.jpg'
import geotecoLogo from '../../assets/images/professionalExperiences/geoteco_logo.jpg'
import thirdEnterpriseLogo from '../../assets/images/professionalExperiences/thirdEnterpriseLogo.svg'

// Components
import ExperienceCardComponent from './components/ExperienceCardComponent/ExperienceCard.component'

// Librry
import { useTranslation, Trans } from 'react-i18next'

const ProfessionalExperienceSection = () => {
	const { t } = useTranslation()

	return (
		<section className="proffesionalExperienceContainer">
			<h1 className="sectionTitle">{t(['professionalExperience.title'])}</h1>
			<div className="cardsContainer">
				<ExperienceCardComponent
					logo={solemtiLogo}
					title="SOLEMTI"
					heading={t(['professionalExperience.jobs.SOLEMTI.position'])}
					date={t(['professionalExperience.jobs.SOLEMTI.date'])}
				>
					<p>
						<Trans
							i18nKey={'professionalExperience.jobs.SOLEMTI.description'}
							components={{ b: <b /> }}
						/>
					</p>
				</ExperienceCardComponent>
				<ExperienceCardComponent
					logo={reseerLogo}
					title="RESSER"
					heading={t(['professionalExperience.jobs.RESSER.position'])}
					date={t(['professionalExperience.jobs.RESSER.date'])}
				>
					<Trans
						i18nKey={'professionalExperience.jobs.RESSER.description'}
						components={{ ul: <ul />, li: <li />, p: <p /> }}
					/>
				</ExperienceCardComponent>
				<ExperienceCardComponent
					logo={iotacLogo}
					title={'IOTAC'}
					heading={t(['professionalExperience.jobs.iotac.position'])}
					date={t(['professionalExperience.jobs.iotac.date'])}
				>
					<Trans
						i18nKey={'professionalExperience.jobs.iotac.description'}
						components={{ ul: <ul />, li: <li />, p: <p /> }}
					/>
				</ExperienceCardComponent>
				<ExperienceCardComponent
					logo={thirdEnterpriseLogo}
					title={'IO Connect Services'}
					heading={t(['professionalExperience.jobs.ioConnectServices.position'])}
					date={t(['professionalExperience.jobs.ioConnectServices.date'])}
				>
					<Trans
						i18nKey={'professionalExperience.jobs.ioConnectServices.description'}
						components={{ ul: <ul />, li: <li />, p: <p />, b: <b /> }}
					/>
				</ExperienceCardComponent>
				<ExperienceCardComponent
					logo={deloitteLogo}
					title="DELOITTE"
					heading={t(['professionalExperience.jobs.deloitte.position'])}
					date={t(['professionalExperience.jobs.deloitte.date'])}
				>
                    <Trans
						i18nKey={'professionalExperience.jobs.deloitte.description'}
						components={{ p: <p />, b: <b /> }}
					/>
				</ExperienceCardComponent>
				<ExperienceCardComponent
					logo={geotecoLogo}
					title="GEOTECO"
					heading={t(['professionalExperience.jobs.geoteco.position'])}
					date={t(['professionalExperience.jobs.geoteco.date'])}
				>
                    <Trans
						i18nKey={'professionalExperience.jobs.geoteco.description'}
						components={{ p: <p />, b: <b /> }}
					/>
				</ExperienceCardComponent>
			</div>
		</section>
	)
}

export default ProfessionalExperienceSection
