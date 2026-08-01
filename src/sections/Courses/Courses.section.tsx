/* eslint-disable @typescript-eslint/no-unused-vars */

// Styles
import './Courses.section.style.css'

// Assets
import n8nLogo from '../../assets/images/courses/n8n_logo.webp'
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

const CoursesSection = () => {
	const { t } = useTranslation()
	const courses = [
		{
			title: 'n8n',
			date: t(['coursesAndTraining.courses.n8n.date']),
			image: n8nLogo,
		},
		{
			title: 'React Native',
			date: t(['coursesAndTraining.courses.reactNative.date']),
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
	]

	return (
		<section className="coursesContainer">
			<h1 className="sectionTitle">{t(['coursesAndTraining.title'])}</h1>
			<CarouselComponent itemsList={courses} />
		</section>
	)
}

export default CoursesSection
