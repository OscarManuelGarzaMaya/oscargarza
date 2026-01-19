// Styles
import './Education.component.style.css'

// Libraries
import { useTranslation } from 'react-i18next'

const EducationComponent = () => {
	const { t } = useTranslation()

	return (
		<section className="educationContainer">
			<h1 className="sectionTitle">{t(['education.title'])}</h1>
			<div className="contentContainer">
				<div className="collageContainer">
					<h3 className="collegeTitle">{t(['education.collage.UNE.name'])}</h3>
					<h4 className="careerTitle">
						{t(['education.collage.UNE.bachelorsDegree'])}
					</h4>
					<p className="educationDate">
						{t(['education.collage.UNE.dateAndLocation'])}
					</p>
					<p className="educationDescription">
						{t(['education.collage.UNE.extra.firstParagraph'])}
						<i>{t(['education.collage.UNE.extra.secondParagraph'])}</i>
					</p>
				</div>
				<div className="verticalDivider" />
				<div className="collageContainer">
					<h3 className="collegeTitle">{t(['education.collage.ICEST.name'])}</h3>
					<h4 className="careerTitle">
						{t(['education.collage.ICEST.bachelorsDegree'])}
					</h4>
					<p className="educationDate">
						{t(['education.collage.ICEST.dateAndLocation'])}
					</p>
				</div>
			</div>
		</section>
	)
}

export default EducationComponent
