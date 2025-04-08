import '../../assets/globals.css'
import './Hello.component.style.css'
import dictionary from '../../dictionary.json'

const HelloComponent = () => {
	return (
		<div className="helloContainer">
			<div className="genericStyles helloMessage">{dictionary.hello.title}</div>
		</div>
	)
}

export default HelloComponent
