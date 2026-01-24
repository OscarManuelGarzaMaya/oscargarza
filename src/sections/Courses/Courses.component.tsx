/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

// Styles
import './Courses.component.style.css'

// Assets
import ReactLogo from '../../assets/images/courses/React.svg'
import HTMLLogo from '../../assets/images/courses/HTMLLogo.svg'
import CSSLogo from '../../assets/images/courses/CSSLogo.svg'
import JSLogo from '../../assets/images/courses/JSLogo.svg'
import TSLogo from '../../assets/images/courses/TSLogo.svg'
import mySQLLogo from '../../assets/images/courses/mySQLLogo.svg'

// Components
import CarouselComponent from '../../components/Carousel/Carousel.component'

// Libraries
import { useTranslation } from 'react-i18next'

const CoursesComponent = () => {
	const { t } = useTranslation()
	const [titles, _] = useState([
		{
			title: 'React Native',
			image: ReactLogo,
		},
		{
			title: 'HTML',
			image: HTMLLogo,
		},
		{
			title: 'CSS',
			image: CSSLogo,
		},
		{
			title: 'Java Script',
			image: JSLogo,
		},
		{
			title: 'Type Script',
			image: TSLogo,
		},
		{
			title: 'MY SQL',
			image: mySQLLogo,
		},
	])

	return (
		<section className="coursesContainer">
			<h1 className="sectionTitle">{t(['coursesAndTraining.title'])}</h1>
			<CarouselComponent itemsList={titles} />
		</section>
	)
}

export default CoursesComponent
