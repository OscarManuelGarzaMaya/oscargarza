import { useState } from 'react'

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
	const [currentIndex, setCurrentIndex] = useState(0)
	const aux = 4

	const onLeftClick = () => {
		if (currentIndex === 0) {
			return
		}
		console.log('currentIndex (left): ' + currentIndex)

		if (currentIndex <= aux) {
			setCurrentIndex(0)
			return
		}

		if (currentIndex - aux >= 0) {
			setCurrentIndex((value) => Math.max(0, value - aux))
		}
	}

	const onRightClick = () => {
		if (currentIndex === itemsList.length) {
			return
		}
		console.log('currentIndex (right): ' + currentIndex)

		if (currentIndex + aux >= itemsList.length) {
			setCurrentIndex(itemsList.length)
			return
		}

		setCurrentIndex((value) =>
			Math.min(value + aux, Math.max(0, itemsList.length - aux)),
		)
	}

	return (
		<div className="carouselContainer">
			<img
				alt="leftside chevron"
				className="carouselLeftsideChevron"
				onClick={onLeftClick}
				src={leftsideChevron}
			/>
			<div className="itemsListContainer">
				{itemsList.map((item, id) => {
					return (
						<div
							className="itemContainer"
							key={item.title + id.toString()}
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
				onClick={onRightClick}
				src={rightsideChevron}
			/>
		</div>
	)
}

export default CarouselComponent
