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
			<div className="coursesListContainer">
				{itemsList.map((item) => {
					return (
						<div className="courseContainer">
							<img
								src={item.image}
								alt={item.image}
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
