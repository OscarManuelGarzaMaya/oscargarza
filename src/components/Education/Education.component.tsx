// Styles
import './Education.component.style.css'

const EducationComponent = () => {
	return (
		<section className="educationContainer">
			<h1 className="sectionTitle">Education</h1>
			<div className="contentContainer">
				<div className="collageContainer">
					<h3 className="collegeTitle">Universidad del Noreste</h3>
					<h4 className="careerTitle">Computer Systems and Electronics Engineer</h4>
					<p className="educationDate">Tampico, México 2018-2020</p>
					<p className="educationDescription">
						I represented the University of the Northeast at the State Contest of
						Creativity and Innovation in Technology, ExpoCiencias Tamaulipas.
					</p>
				</div>
				<hr />
				<div className="collageContainer">
					<h3 className="collegeTitle">
						Science and Advance Studies Institute of Tamaulipas
					</h3>
					<h4 className="careerTitle">Computer Systems and Electronics Engineer</h4>
					<p className="educationDate">Tampico, México 2018-2020</p>
				</div>
			</div>
		</section>
	)
}

export default EducationComponent
