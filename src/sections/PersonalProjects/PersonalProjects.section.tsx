// Styles
import './PersonalProjects.section.style.css'

// Components
import ProjectCardComponent from './Components/ProjectCard/ProjectCard.component'

// Assets
import ezPDFLogo from '../../assets/images/professionalExperiences/ezPdf_logo.png'
import oscargarzaLogo from "../../../public/favicon.ico"
import qrOscarGarza from '../../assets/images/qrOscargarza.svg'

const PersonalProjectsSection = () => {
	return (
		<section className="personalProjectsContainer">
			<h1 className="sectionTitle">{'Proyectos personales'}</h1>
			<div className="projectsContainer">
				<ProjectCardComponent
					qr={qrOscarGarza}
					logo={oscargarzaLogo}
					title={'oscargarza.com'}
					date={'Enero 2026'}
				>
					<div>
						<p>
							Este sitio web tiene un objetivo: Que conozcas mi perfil profesional en
							el rubro de la técnología. La desarrollé teniendo como prioridad los
							siguientes 3 puntos:
						</p>
						<ol>
							<li>Su rápido despliegue.</li>
							<li>Bajo costo de desarrollo y mantenimiento.</li>
							<li>Accesibilidad para audiencias de distintos idiomas.</li>
						</ol>
						<p>
							Con esto en mente realicé el diseño de la infraestructura con{' '}
							<a
								href="https://es.react.dev/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>React ↗</b>
							</a>{' '}
							para el desarrollo,{' '}
							<a
								href="https://docs.github.com/es/pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>GitHub Pages ↗</b>
							</a>{' '}
							para el hosting, el{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>CLI gh-pages ↗</b>
							</a>{' '}
							para el despliegue, y{' '}
							<a
								href="https://www.cloudflare.com/es-es/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>Cloudflare ↗</b>
							</a>{' '}
							para el DNS del dominio personalizado. Aunado a esto integré la librería{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>i18next ↗</b>
							</a>{' '}
							para lograr la traducción a Inglés, Español y Francés.
						</p>
					</div>
				</ProjectCardComponent>
				<ProjectCardComponent
					qr={qrOscarGarza}
					logo={ezPDFLogo}
					title={'Ez-PDF'}
					date={'Enero 2026'}
				>
					<div>
						<p>
							Este sitio web tiene un objetivo: Que conozcas mi perfil profesional en
							el rubro de la técnología. La desarrollé teniendo como prioridad los
							siguientes 3 puntos:
						</p>
						<ol>
							<li>Su rápido despliegue.</li>
							<li>Bajo costo de desarrollo y mantenimiento.</li>
							<li>Accesibilidad para audiencias de distintos idiomas.</li>
						</ol>
						<p>
							Con esto en mente realicé el diseño de la infraestructura con{' '}
							<a
								href="https://es.react.dev/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>React ↗</b>
							</a>{' '}
							para el desarrollo,{' '}
							<a
								href="https://docs.github.com/es/pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>GitHub Pages ↗</b>
							</a>{' '}
							para el hosting, el{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>CLI gh-pages ↗</b>
							</a>{' '}
							para el despliegue, y{' '}
							<a
								href="https://www.cloudflare.com/es-es/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>Cloudflare ↗</b>
							</a>{' '}
							para el DNS del dominio personalizado. Aunado a esto integré la librería{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>i18next ↗</b>
							</a>{' '}
							para lograr la traducción a Inglés, Español y Francés.
						</p>
					</div>
				</ProjectCardComponent>
				<ProjectCardComponent
					qr={qrOscarGarza}
					logo={ezPDFLogo}
					title={'Ez-PDF'}
					date={'Enero 2026'}
				>
					<div>
						<p>
							Este sitio web tiene un objetivo: Que conozcas mi perfil profesional en
							el rubro de la técnología. La desarrollé teniendo como prioridad los
							siguientes 3 puntos:
						</p>
						<ol>
							<li>Su rápido despliegue.</li>
							<li>Bajo costo de desarrollo y mantenimiento.</li>
							<li>Accesibilidad para audiencias de distintos idiomas.</li>
						</ol>
						<p>
							Con esto en mente realicé el diseño de la infraestructura con{' '}
							<a
								href="https://es.react.dev/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>React ↗</b>
							</a>{' '}
							para el desarrollo,{' '}
							<a
								href="https://docs.github.com/es/pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>GitHub Pages ↗</b>
							</a>{' '}
							para el hosting, el{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>CLI gh-pages ↗</b>
							</a>{' '}
							para el despliegue, y{' '}
							<a
								href="https://www.cloudflare.com/es-es/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>Cloudflare ↗</b>
							</a>{' '}
							para el DNS del dominio personalizado. Aunado a esto integré la librería{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>i18next ↗</b>
							</a>{' '}
							para lograr la traducción a Inglés, Español y Francés.
						</p>
					</div>
				</ProjectCardComponent>
				<ProjectCardComponent
					qr={qrOscarGarza}
					logo={ezPDFLogo}
					title={'Ez-PDF'}
					date={'Enero 2026'}
				>
					<div>
						<p>
							Este sitio web tiene un objetivo: Que conozcas mi perfil profesional en
							el rubro de la técnología. La desarrollé teniendo como prioridad los
							siguientes 3 puntos:
						</p>
						<ol>
							<li>Su rápido despliegue.</li>
							<li>Bajo costo de desarrollo y mantenimiento.</li>
							<li>Accesibilidad para audiencias de distintos idiomas.</li>
						</ol>
						<p>
							Con esto en mente realicé el diseño de la infraestructura con{' '}
							<a
								href="https://es.react.dev/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>React ↗</b>
							</a>{' '}
							para el desarrollo,{' '}
							<a
								href="https://docs.github.com/es/pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>GitHub Pages ↗</b>
							</a>{' '}
							para el hosting, el{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>CLI gh-pages ↗</b>
							</a>{' '}
							para el despliegue, y{' '}
							<a
								href="https://www.cloudflare.com/es-es/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>Cloudflare ↗</b>
							</a>{' '}
							para el DNS del dominio personalizado. Aunado a esto integré la librería{' '}
							<a
								href="https://github.com/tschaub/gh-pages"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>i18next ↗</b>
							</a>{' '}
							para lograr la traducción a Inglés, Español y Francés.
						</p>
					</div>
				</ProjectCardComponent>
			</div>
		</section>
	)
}

export default PersonalProjectsSection
