// Styles
import './Header.component.style.css'

// Components
import DropdownComponent from '../Dropdown/Dropdown.component'

// Misc
import dictionary from '../../dictionary.json'

const HeaderComponent = () => {
	return (
		<div className="headerSiteContainer">
			<div className="headerInnerContainer">
				<div className="leftContainer">
					<h1 className="headerName">{dictionary.header.name}</h1>
				</div>
				<div id="rightContainer">
					<DropdownComponent />
				</div>
			</div>
		</div>
	)
}

export default HeaderComponent
