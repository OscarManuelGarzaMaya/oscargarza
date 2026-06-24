/* eslint-disable @typescript-eslint/no-unused-vars */

// Styles
import './Tools.component.style.css'

// Components
import CarouselComponent from '../../components/Carousel/Carousel.component'

// Assets
import n8nLogo from '../../assets/images/courses/n8n_logo.webp'
import GitLogo from '../../assets/images/tools/gitLogo.svg'
import GitHubLogo from '../../assets/images/tools/githubLogo.svg'
import CicdLogo from '../../assets/images/tools/cicdLogo.svg'
import FigmaLogo from '../../assets/images/tools/figmaLogo.svg'
import { useTranslation } from 'react-i18next'

const ToolsComponent = () => {
	const { t } = useTranslation()
    const tools = [
		{
			title: 'n8n',
			date: t(['tools.courses.n8n.date']),
			image: n8nLogo,
		},
		{
			title: 'Git',
            date: t(['tools.courses.git.date']),
			image: GitLogo,
		},
		{
			title: 'GitHub',
            date: t(['tools.courses.github.date']),
			image: GitHubLogo,
		},
		{
			title: 'CI/CD',
			image: CicdLogo,
		},
		{
			title: 'Figma',
			image: FigmaLogo,
		},
	]

	return (
		<section className="toolsContainer">
			<h1 className="sectionTitle">{t(['tools.title'])}</h1>
			<CarouselComponent itemsList={tools} />
		</section>
	)
}

export default ToolsComponent
