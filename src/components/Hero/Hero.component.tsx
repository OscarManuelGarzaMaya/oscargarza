// Styles
import './Hero.component.style.css'

const HeroComponent = () => {
	return (
		<div className="heroContainer">
			<div className="heroRightContainer">
				<div className="titleContainer">
					<h1 className="title">Oscar Manuel</h1>
					<h1 className="title">Garza Maya</h1>
				</div>
				<div className="subtitleContainer">
					<h3>Software Engineer</h3>
				</div>
				<div className="descriptionContainer">
					<p className="desription">
						I build modern, scalable web and mobile applications using <br />{' '}
						Cutting-Edge technologies.
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
			<div className="imgContainer"></div>
		</div>
	)
}

export default HeroComponent
