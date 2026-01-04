// Styles
import './Profiles.component.style.css'

// Images
import githubLogo from '../../assets/images/profiles/github-logo.svg'
import linkedinLogo from '../../assets/images/profiles/linkedin-logo.svg'

const ProfilesComponent = () => {
	return (
		<div className="profilesContainer">
			<a
				href="https://github.com/OscarManuelGarzaMaya"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={githubLogo}
					alt="githubLogo"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/oscar-manuel-garza-maya-83145a1a0/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={linkedinLogo}
					alt="linkedinLogo"
				/>
			</a>
		</div>
	)
}

export default ProfilesComponent
