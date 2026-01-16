// Styles
import './Header.component.style.css'

// Components
import DropdownComponent from '../Dropdown/Dropdown.component'
import ProfilesComponent from '../Profiles/Profiles.component'

const HeaderComponent = () => {
	return (
		<section className="headerSiteContainer">
			<div className="headerInnerContainer">
				<div className="leftContainer">
					<h1 className="headerName">Oscar Garza</h1>
				</div>
				<div className="rightContainer">
					<DropdownComponent />
					<ProfilesComponent />
				</div>
			</div>
		</section>
	)
}

export default HeaderComponent
