import type { ReactNode } from 'react'

// Styles
import './Card.component.style.css'
import CardHeaderComponent from '../CardHeader/CardHeader.component'

const CardComponent = ({
	logo = '',
	title,
	heading,
	date,
	children,
}: {
	logo?: string
	title: string
	heading: string
	date: string
	children?: ReactNode
}) => {
	return (
		<div className="cardContainer">
			<CardHeaderComponent
				title={title}
				logo={logo}
				heading={heading}
				date={date}
			/>
			<div className={`cardDescription ${children ? '' : 'cardNotDescription'}`}>
				{children}
			</div>
		</div>
	)
}

export default CardComponent
