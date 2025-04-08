import '../../assets/globals.css'
import './Hello.component.style.css'
import dictionary from '../../dictionary.json'

import profilePic from '../../assets/images/perfil.png'

const HelloComponent = () => {
	return (
		<div className="helloContainer">
			<div className="profilePicContainer">
				<img
					src={profilePic}
					alt="imagenDePerfil"
				/>
			</div>
			<div className="titleContainer">
				<div className="genericStyles helloMessage">{dictionary.hello.title}</div>
			</div>
		</div>
	)
}

export default HelloComponent
