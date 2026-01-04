// Styles
import './Profiles.component.style.css'

// Images
import githubLogo from '../../assets/images/profiles/github-logo.svg'
import linkedinLogo from '../../assets/images/profiles/linkedin-logo.svg'

const ProfilesComponent = () => {
	return (
		<div className="profilesContainer">
			<img
				src={githubLogo}
				alt="githubLogo"
			/>
			<img
				src={linkedinLogo}
				alt="linkedinLogo"
			/>
		</div>
	)
}

export default ProfilesComponent
