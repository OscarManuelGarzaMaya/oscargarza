// Styles
import './Education.component.style.css'

// Custom hooks
import { useMediaQuery } from '../../hooks/useMediaQuery'

// Libraries
import { useTranslation } from 'react-i18next'

// Components
import CardComponent from '../Card/Card.component'

const EducationComponent = () => {
	const { t } = useTranslation()
	const isDesktop = useMediaQuery('(min-width: 1400px)')

	return (
		<section className="educationContainer">
			<h1 className="sectionTitle">{t(['education.title'])}</h1>
			{isDesktop ? (
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
			) : (
				<div className="scholarshipContainer">
					<CardComponent
						title={t(['education.collage.UNE.name'])}
						heading={t(['education.collage.UNE.bachelorsDegree'])}
						date={t(['education.collage.UNE.dateAndLocation'])}
					>
						<p className="educationDescription">
							{t(['education.collage.UNE.extra.firstParagraph'])}
							<i>{t(['education.collage.UNE.extra.secondParagraph'])}</i>
						</p>
					</CardComponent>
					<CardComponent
						title={t(['education.collage.ICEST.name'])}
						heading={t(['education.collage.ICEST.bachelorsDegree'])}
						date={t(['education.collage.ICEST.dateAndLocation'])}
					/>
				</div>
			)}
		</section>
	)
}

export default EducationComponent
