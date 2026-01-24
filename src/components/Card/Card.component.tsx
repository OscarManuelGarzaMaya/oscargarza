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
			<div className="titleContainer">
				{logo !== '' ? (
					<img
						src={logo}
						alt="logo"
					/>
				) : (
					<></>
				)}
				<h2 className="title">{title}</h2>
			</div>
			<div className="dataContainer">
				<h3 className="heading">{heading}</h3>
				<p className="date">{date}</p>
			</div>
			<div className="description">{children}</div>
		</div>
	)
}

export default CardComponent
