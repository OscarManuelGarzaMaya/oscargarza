// Styles
import './Footer.component.style.css'

// Assets
import phoneIcon from '../../assets/images/footer/phoneIcon.svg'
import emailIcon from '../../assets/images/footer/emailIcon.svg'

const FooterComponent = () => {
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
				<p className="footerDescription">All Rigts Reserver @ 2025. OSCAR GARZA</p>
			</div>
		</section>
	)
}

export default FooterComponent
