import type { ReactNode } from 'react'

// Styles
import './Card.component.style.css'

const CardComponent = ({
	logo = '',
	title,
	heading,
	date,
	children,
}: {
	logo: string
	title: string
	heading: string
	date: string
	children: ReactNode
}) => {
	return (
		<div className="cardContainer">
			<div className="cardTitleContainer">
				{logo !== '' ? (
					<img
						src={logo}
						alt="logo"
					/>
				) : (
					<></>
				)}
				<h2 className="cardTitle">{title}</h2>
			</div>
			<div className="cardDataContainer">
				<h3 className="cardHeading">{heading}</h3>
				<p className="cardDate">{date}</p>
			</div>
			<div className="cardDescription">{children}</div>
		</div>
	)
}

export default CardComponent
