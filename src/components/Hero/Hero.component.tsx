// Styles
import './Hero.component.style.css'

import heroImage from '../../assets/images/HeroImage.svg'

const HeroComponent = () => {
	return (
		<div className="heroContainer">
			<div className="heroInnerContainer">
				<div className="heroDescriptionContainer">
					<div className="titleContainer">
						<h1 className="title">Oscar Manuel</h1>
						<h1 className="title">Garza Maya</h1>
					</div>
					<div className="subtitleContainer">
						<h4 className="subtitle">Software Engineer</h4>
					</div>
					<div className="descriptionContainer">
						<p className="desription">
							I build modern, scalable web and mobile applications using Cutting-Edge
							technologies.
						</p>
					</div>
					<div className="buttonsContainer">
						<button
							className="downloadButton"
							title="Download resume"
						>
							Download resume
						</button>
						<button
							className="connectNowButton"
							title="Connect Now"
						>
							Connect Now
						</button>
					</div>
				</div>
				<div className="heroImgContainer">
					<img
						alt="Hero drawing"
						className="heroImg"
						src={heroImage}
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroComponent
