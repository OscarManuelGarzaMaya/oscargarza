// Styles
import './Hero.component.style.css'

// Assets
import heroImage from '../../assets/images/HeroImage.svg'
import en from '../../locales/en/translation.json'
import es from '../../locales/es/translation.json'
import fr from '../../locales/fr/translation.json'

// Libraries
import i18next from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

const HeroComponent = () => {
	i18next.use(initReactI18next).init({
		fallbackLng: 'en',
		resources: {
			en: { translation: en },
			es: { translation: es },
			fr: { translation: fr },
		},
		interpolation: { escapeValue: false },
	})
	const { t } = useTranslation()

	return (
		<section className="heroContainer">
			<div className="heroInnerContainer">
				<div className="heroDescriptionContainer">
					<div className="titleContainer">
						<h1 className="title">Oscar Manuel</h1>
						<h1 className="title">Garza Maya</h1>
					</div>
					<div className="subtitleContainer">
						<h4 className="subtitle">{t(['hero.bachelorsDegree'])}</h4>
					</div>
					<div className="descriptionContainer">
						<p className="description">{t(['hero.description'])}</p>
					</div>
					<div className="buttonsContainer">
						<a
							href="/files/CV-Oscar-Manuel-Garza-Maya-Eng.pdf"
							download
							className="downloadButton"
						>
							<span title="Download resume">{t(['hero.button.download'])}</span>
						</a>
						<a
							// TODO: Sent me an email with this
							href="/"
							className="connectNowButton"
						>
							<span title="Connect Now">{t(['hero.button.connectNow'])}</span>
						</a>
					</div>
				</div>
				<div className="heroImgContainer">
					<img
						alt="Hero drawing"
						className="heroImg"
						src={heroImage}
					/>
				</div>
			</div>
		</section>
	)
}

export default HeroComponent
