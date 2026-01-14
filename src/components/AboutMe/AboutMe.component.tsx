import '../../assets/globals.css'
import './AboutMe.component.style.css'

// Assets
import aboutMe from '../../assets/images/softwareDev.svg'

const AboutMeComponent = () => {
	return (
		<section className="AboutMeContainer">
			<div className="aboutMeTitleContainer">
				<h1 className="aboutMeTitle">About Me</h1>
			</div>
			<div className="aboutMeContentContainer">
				<p>
					I am seeking an opportunity to apply my technical knowledge and
					professional experience in a dynamic work environment, while continuously
					learning and improving through new challenges. I am focused on delivering
					quality results and contributing to solutions that are reliable, scalable,
					and user-oriented.
					<br />
					<br />I am motivated by growth, responsibility, and innovation, and I enjoy
					working on projects that allow me to develop both technically and
					professionally. My goal is to contribute value to a collaborative team
					while expanding my skills and taking on new challenges.
				</p>
				<img
					src={aboutMe}
					alt="About me"
				/>
			</div>
		</section>
	)
}

export default AboutMeComponent
