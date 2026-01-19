import { useRef } from 'react'

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
	const sliderRef = useRef<HTMLDivElement | null>(null)

	const onLeftClick = () => {
		const target = sliderRef.current

		if (!target) {
			return
		}

		const currentPlace = target.scrollLeft
		const clientWidth = target.clientWidth

		target.scrollTo({
			left: currentPlace - clientWidth / 2,
			behavior: 'smooth',
		})
	}

	const onRightClick = () => {
		const target = sliderRef.current

		if (!target) {
			return
		}

		const currentPlace = target.scrollLeft
		const clientWidth = target.clientWidth

		target.scrollTo({
			left: currentPlace + clientWidth / 2,
			behavior: 'smooth',
		})
	}

	return (
		<div className="carouselContainer">
			<img
				alt="leftside chevron"
				className="carouselLeftsideChevron"
				onClick={onLeftClick}
				src={leftsideChevron}
			/>
			<div
				className="itemsListContainer"
				id={'mainSlider'}
				ref={sliderRef}
			>
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
