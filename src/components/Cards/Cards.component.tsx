import type { ReactNode } from 'react'

// Styles
import './Cards.component.style.css'

const CardsComponent = ({
	enterpriseLogo,
	enterpriseTitle,
	positionTitle,
	date,
	children,
}: {
	enterpriseLogo: string
	enterpriseTitle: string
	positionTitle: string
	date: string
	children: ReactNode
}) => {
	return (
		<div className="cardContainer">
			<div className="enterpriseContainer">
				<img
					src={enterpriseLogo}
					alt="Enterprise Logo"
				/>
				<h2>{enterpriseTitle}</h2>
			</div>
			<div className="jobDataContainer">
				<h3 className="poistionTitle">{positionTitle}</h3>
				<p className="positionDate">{date}</p>
			</div>
			<div className="jobDescription">{children}</div>
		</div>
	)
}

export default CardsComponent
