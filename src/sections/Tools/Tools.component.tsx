/* eslint-disable @typescript-eslint/no-unused-vars */
// Styles
import { useState } from 'react'
import './Tools.component.style.css'

// Components
import CarouselComponent from '../../components/Carousel/Carousel.component'

// Assets
import n8nLogo from '../../assets/images/professionalExperiences/n8n_logo.webp'
import GitLogo from '../../assets/images/tools/gitLogo.svg'
import GitHubLogo from '../../assets/images/tools/githubLogo.svg'
import CicdLogo from '../../assets/images/tools/cicdLogo.svg'
import FigmaLogo from '../../assets/images/tools/figmaLogo.svg'
import { useTranslation } from 'react-i18next'

const ToolsComponent = () => {
	const { t } = useTranslation()
	const [tools, _] = useState([
		{
			title: 'n8n',
			date: 'May 2026',
			image: n8nLogo,
		},
		{
			title: 'Git',
			image: GitLogo,
		},
		{
			title: 'GitHub',
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
	])

	return (
		<section className="toolsContainer">
			<h1 className="sectionTitle">{t(['tools.title'])}</h1>
			<CarouselComponent itemsList={tools} />
		</section>
	)
}

export default ToolsComponent
