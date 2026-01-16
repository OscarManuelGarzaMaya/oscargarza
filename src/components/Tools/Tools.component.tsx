/* eslint-disable @typescript-eslint/no-unused-vars */
// Styles
import { useState } from 'react'
import './Tools.component.style.css'

// Components
import CarouselComponent from '../Carousel/Carousel.component'

// Assets
import ReactLogo from '../../assets/images/courses/React.svg'
import AngularLogo from '../../assets/images/tools/angularLogo.svg'
import GitLogo from '../../assets/images/tools/gitLogo.svg'
import GitHubLogo from '../../assets/images/tools/githubLogo.svg'
import CicdLogo from '../../assets/images/tools/cicdLogo.svg'
import FigmaLogo from '../../assets/images/tools/figmaLogo.svg'

const ToolsComponent = () => {
	const [titles, setTitles] = useState([
		{
			title: 'React Native',
			image: ReactLogo,
		},
		{
			title: 'Angular',
			image: AngularLogo,
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
		<div className="toolsContainer">
			<h1 className="sectionTitle">Tools & Technologies</h1>
			<CarouselComponent itemsList={titles} />
		</div>
	)
}

export default ToolsComponent
