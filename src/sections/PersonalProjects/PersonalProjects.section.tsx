// Styles
import CardComponent from '../../components/Card/Card.component'
import './PersonalProjects.section.style.css'

// Assets
import ezPDFLogo from '../../assets/images/professionalExperiences/ezPdf_logo.png'

const PersonalProjectsSection = () => {
	return (
		<section className="personalProjectsContainer">
			<h1 className="sectionTitle">{'Proyectos personales'}</h1>
			<div className="projectsContainer">
				<CardComponent
					title="EZ-PDF"
					logo={ezPDFLogo}
					heading={"test"}
					date={"test"}
				>
					<ul>
						<li>
							<p>{}</p>
						</li>
					</ul>
				</CardComponent>
			</div>
		</section>
	)
}

export default PersonalProjectsSection
