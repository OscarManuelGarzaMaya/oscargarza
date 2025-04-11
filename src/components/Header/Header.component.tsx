// Styles
import './Header.component.style.css'

// Components
import ButtonComponent from '../Button/Button.component'

// Misc
import dictionary from '../../dictionary.json'

const HeaderComponent = () => {
	return (
		<div className="headerContainer">
			<ButtonComponent text={dictionary.header.buttons.aboutMe} />
			<ButtonComponent text={dictionary.header.buttons.projects} />
			<ButtonComponent text={dictionary.header.buttons.studies} />
			<ButtonComponent text={dictionary.header.buttons.contactMe} />
		</div>
	)
}

export default HeaderComponent
