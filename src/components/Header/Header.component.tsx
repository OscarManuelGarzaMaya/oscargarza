// Styles
import './Header.component.style.css'

// Components
import DropdownComponent from '../Dropdown/Dropdown.component'
import ProfilesComponent from '../Profiles/Profiles.component'

// Custom hooks
import { useMediaQuery } from '../../hooks/useMediaQuery'

const HeaderComponent = () => {
	const isDesktop = useMediaQuery('(min-width: 1400px)')

	return (
		<section className="headerSiteContainer sticky">
			<div className="headerInnerContainer">
				<div className="leftContainer">
					<h1 className="headerName">Oscar Garza</h1>
				</div>
				<div className="rightContainer">
					<DropdownComponent />
					{isDesktop && <ProfilesComponent />}
				</div>
			</div>
		</section>
	)
}

export default HeaderComponent
