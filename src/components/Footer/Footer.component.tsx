// Styles
import './Footer.component.style.css'

// Assets
import phoneIcon from '../../assets/images/footer/phoneIcon.svg'
import emailIcon from '../../assets/images/footer/emailIcon.svg'

// Libraries
import { useTranslation } from 'react-i18next'

const FooterComponent = () => {
	const { t } = useTranslation()

	return (
		<section className="footerContainer">
			<div className="contactInfoContainer">
				<div className="phoneNumberContainer">
					<img
						src={phoneIcon}
						alt="phoneIcon"
						className="footerIcon"
					/>
					<p className="footerDetail">+52 833 105 35 60</p>
				</div>
				<div className="phoneNumberContainer">
					<img
						src={emailIcon}
						alt="emailIcon"
						className="footerIcon"
					/>
					<p className="footerDetail">osgarzam@gmail.com</p>
				</div>
			</div>
			<hr />
			<div className="footerDescriptionContainer">
				<p className="footerDescription">{t(['footer.description'])}</p>
			</div>
		</section>
	)
}

export default FooterComponent
