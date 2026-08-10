import '../../assets/globals.css'
import './AboutMe.section.style.css'

// Custom hooks
import useVisitorRegion from '../../hooks/useVisitorsRegion'

// Assets
import aboutMe from '../../assets/images/softwareDev.png'

// Libraries
import { useTranslation, Trans } from 'react-i18next'

const AboutMeSection = () => {
	const { t } = useTranslation()
    const region = useVisitorRegion() 

	return (
            <section className="AboutMeContainer">
			<h1 className="sectionTitle">{t(['aboutMe.title'])}</h1>
			<div className="aboutMeContentContainer">
				<p>
					<Trans
						i18nKey={'aboutMe.description'}
						components={{ b: <b />, br: <br /> }}
						values={{ region }}
					/>
				</p>
				<img
					src={aboutMe}
					alt="About me"
				/>
			</div>
		</section>
	)
}

export default AboutMeSection
