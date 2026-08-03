// Styles
import './CardHeader.component.style.css'

const CardHeaderComponent = ({
	logo = '',
	title,
	heading,
	date,
}: {
	logo?: string
	title: string
	heading?: string
	date?: string
}) => {
	return (
		<div className="cardHeaderContainer">
			<div className='cardTitleContainer'>
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
			<div className="cardMetaDataContainer">
				<div className="cardDataContainer">
					<h3 className={`cardHeading ${logo !== '' ? '' : 'cardSecondaryHeading'}`}>
						{heading}
					</h3>
					<p className="cardDate">{date}</p>
				</div>
			</div>
		</div>
	)
}

export default CardHeaderComponent
