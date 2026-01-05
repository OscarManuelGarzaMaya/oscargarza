// Styles
import './Hero.component.style.css'

// Assets
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
						<p className="description">
							I build modern, scalable web and mobile applications using Cutting-Edge
							technologies.
						</p>
					</div>
					<div className="buttonsContainer">
						<a
							href="/files/CV-Oscar-Manuel-Garza-Maya-Eng.pdf"
							download
							className="downloadButton"
						>
							<span title="Download resume">Download resume</span>
						</a>
						<a
							href="/"
							className="connectNowButton"
						>
							<span title="Connect Now">Connect Now</span>
						</a>
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
