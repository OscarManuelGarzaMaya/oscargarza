import React, { useState } from 'react'

// Styles
import './Hero.component.style.css'

// Assets
import heroImage from '../../assets/images/HeroImage.svg'
import englishCV from '/files/CV-Oscar-Manuel-Garza-Maya-Eng.pdf'
import spanishCV from '/files/CV-Oscar-Manuel-Garza-Maya-Esp.pdf'
import frenchCV from '/files/CV-Oscar-Manuel-Garza-Maya-Fr.pdf'

// Libraries
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const HeroComponent = () => {
	const [isContactDisabled, setIsContactDisabled] = useState(false)

	const onContactMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()

		if (isContactDisabled) return

		window.location.href =
			'mailto:osgarzam@gmail.com?subject=Contacto%20desde%20Mi%20portafolio&body=Hola%20[Tu%20Nombre],%0D%0A%0D%0AMe%20gustaría%20ponerme%20en%20contacto%20contigo%20para...%0D%0A%0D%0ASaludos.'

		setIsContactDisabled(true)

		setTimeout(() => {
			setIsContactDisabled(false)
		}, 5000)
	}

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
							href={
								i18next.language === 'en'
									? englishCV
									: i18next.language === 'es'
										? spanishCV
										: frenchCV
							}
							download
							className="downloadButton"
						>
							<span title="Download resume">{t(['hero.button.download'])}</span>
						</a>
						<a
							aria-disabled={isContactDisabled}
							className={`connectNowButton ${isContactDisabled ? 'disabled' : 'enabled'}`}
							onClick={onContactMeClick}
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
			{isContactDisabled && (
				<div
					id="snackbar"
					className="show"
				>
					<p className="snackbarText">{t(['hero.snackBar'])}</p>
				</div>
			)}
		</section>
	)
}

export default HeroComponent
