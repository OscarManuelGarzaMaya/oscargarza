// Styles
import type { ReactNode } from 'react'
import './ProjectCard.component.style.css'

// Components
import CardHeaderComponent from '../../../../components/CardHeader/CardHeader.component'

const ProjectCardComponent = ({
	title,
	logo,
	qr = '',
    date,
	children,
}: {
	title: string
	logo: string
	qr: string
    date: string
	children: ReactNode
}) => {
	return (
		<div className="projectCardContainer">
			<CardHeaderComponent
				title={title}
				logo={logo}
				date={date}
			/>
			<div className="projectCardContentContainer">
				<div className='qrContainer'>
					<h1>{title}</h1>
					<img
						src={qr}
						alt={'Qr-' + title}
						className="qrImage"
					/>
				</div>
				{children}
			</div>
		</div>
	)
}

export default ProjectCardComponent
