// Styles
import './PersonalProjects.section.style.css'

// Components
import ProjectCardComponent from './Components/ProjectCard/ProjectCard.component'

// Assets
import { Trans, useTranslation } from 'react-i18next'

const PersonalProjectsSection = () => {
    // This invocation is an extreme exception. Vite (the compiler) asks for this ico to be defined like this since the icon comes from /public folder
    const oscargarzaLogo = '/favicon.ico'
	const { t } = useTranslation()

	return (
		<section className="personalProjectsContainer">
			<h1 className="sectionTitle">{t(['personalProjects.oscargarza.title'])}</h1>
			<div className="projectsContainer">
				<ProjectCardComponent
					logo={oscargarzaLogo}
					title={'oscargarza.com'}
					date={t(['personalProjects.oscargarza.date'])}
				>
					<Trans
						i18nKey={'personalProjects.oscargarza.description'}
						components={{
							div: <div />,
							p: <p />,
							b: <b />,
							ol: <ol className="objectivesList" />,
							li: <li />,
							reactLink: (
								<a
									href="https://es.react.dev/"
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
							pagesLink: (
								<a
									href="https://docs.github.com/es/pages"
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
							cliLink: (
								<a
									href="https://github.com/tschaub/gh-pages"
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
							cloudflareLink: (
								<a
									href="https://www.cloudflare.com/es-es/"
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
							i18nLink: (
								<a
									href="https://www.i18next.com/"
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
						}}
					/>
				</ProjectCardComponent>
			</div>
		</section>
	)
}

export default PersonalProjectsSection
