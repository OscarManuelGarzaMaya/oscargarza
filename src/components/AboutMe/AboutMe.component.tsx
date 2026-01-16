import '../../assets/globals.css'
import './AboutMe.component.style.css'

// Assets
import aboutMe from '../../assets/images/softwareDev.svg'

// Libraries
import { useTranslation } from 'react-i18next'

const AboutMeComponent = () => {
	const { t } = useTranslation()
	return (
		<section className="AboutMeContainer">
			<h1 className="sectionTitle">{t(['aboutMe.title'])}</h1>
			<div className="aboutMeContentContainer">
				<p>
					{t(['aboutMe.description.firstParagraph'])}
					<br />
					<br />
					{t(['aboutMe.description.secondParagraph'])}
				</p>
				<img
					src={aboutMe}
					alt="About me"
				/>
			</div>
		</section>
	)
}

export default AboutMeComponent
