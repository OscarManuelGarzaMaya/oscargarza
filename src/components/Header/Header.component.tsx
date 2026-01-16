// Styles
import './Header.component.style.css'

// Components
import DropdownComponent from '../Dropdown/Dropdown.component'
import ProfilesComponent from '../Profiles/Profiles.component'

// Misc
import dictionary from '../../dictionary.json'

const HeaderComponent = () => {
	return (
		<section className="headerSiteContainer">
			<div className="headerInnerContainer">
				<div className="leftContainer">
					<h1 className="headerName">{dictionary.header.name}</h1>
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
