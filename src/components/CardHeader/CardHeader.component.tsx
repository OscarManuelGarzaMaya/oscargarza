// Styles
import './CardHeader.component.style.css'

const CardHeaderComponent = ({
	logo = '',
	title,
}: {
	logo?: string
	title: string
}) => {
	return (
		<div className="cardHeaderContainer">
			{logo !== '' ? (
				<img
					src={logo}
					alt="logo"
				/>
			) : (
				<></>
			)}
			<h2 className="cardHeader">{title}</h2>
		</div>
	)
}

export default CardHeaderComponent
