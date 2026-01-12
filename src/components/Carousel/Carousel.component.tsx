// Styles
import './Carousel.component.style.css'

// Assets
import leftsideChevron from '../../assets/images/LeftsideChevron.svg'
import rightsideChevron from '../../assets/images/RightsideChevron.svg'

const CarouselComponent = ({
	itemsList,
}: {
	itemsList: {
		title: string
		image: string
	}[]
}) => {
	return (
		<div className="carouselContainer">
			<img
				alt="leftside chevron"
				className="carouselLeftsideChevron"
				src={leftsideChevron}
			/>
			<div className="itemsListContainer">
				{itemsList.map((item, id) => {
					return (
						<div
							className="itemContainer"
							id={item.title + id.toString()}
						>
							<img
								alt={item.image}
								src={item.image}
							/>
							<p>{item.title}</p>
						</div>
					)
				})}
			</div>
			<img
				alt="rightside chevron"
				className="carouselRightsideChevron"
				src={rightsideChevron}
			/>
		</div>
	)
}

export default CarouselComponent
