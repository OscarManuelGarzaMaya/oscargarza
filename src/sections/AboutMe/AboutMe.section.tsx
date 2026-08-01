import '../../assets/globals.css'
import './AboutMe.section.style.css'

// Assets
import aboutMe from '../../assets/images/softwareDev.png'

// Libraries
import { useTranslation } from 'react-i18next'

const AboutMeSection = () => {
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
                    <br />
					<br />
					{t(['aboutMe.description.thirdParagraph'])}
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
