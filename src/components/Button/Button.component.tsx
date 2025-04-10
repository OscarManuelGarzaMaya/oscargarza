import '../../assets/globals.css'
import './Button.component.style.css'

const ButtonComponent = ({ text }: { text: string }) => {
	return (
		<div className="buttonContainer">
			<button className="genericStyles buttonStyle genericShadow">{text}</button>
		</div>
	)
}

export default ButtonComponent
