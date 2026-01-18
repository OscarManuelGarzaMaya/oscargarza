import { useState } from 'react'
import '../../assets/globals.css'

import './Dropdown.component.style.css'

// Flags icons
import americanFlag from '../../assets/images/flags/american-flag.svg'
import mexicanFlag from '../../assets/images/flags/mexican-flag.svg'
import franceFlag from '../../assets/images/flags/france-flag.svg'

// Icons
import downsideChevron from '../../assets/images/DownsideChevron.svg'

// Libraries
import { useTranslation } from 'react-i18next'

const DropdownComponent = () => {
	const { i18n } = useTranslation()
	const [open, setOpen] = useState(false)

	const LANGUAGES = [
		{
			acronim: 'EN',
			flag: americanFlag,
			language: 'en',
			name: 'English',
		},
		{
			acronim: 'SP',
			flag: mexicanFlag,
			language: 'es',
			name: 'Spanish',
		},
		{
			acronim: 'FR',
			flag: franceFlag,
			language: 'fr',
			name: 'French',
		},
	]

	// Normalize language like "en-US" -> "en"
	const selectedLang = i18n.language.split('-')[0]

	const activeLang = LANGUAGES.find((lang) => lang.language === selectedLang)

	return (
		<div className="langDropdown">
			<button
				className="langTrigger"
				onClick={() => setOpen(!open)}
			>
				{activeLang && (
					<>
						<div className="langLabel">
							<span>{activeLang.acronim}</span>
							<img
								src={activeLang.flag}
								alt={activeLang.name}
							/>
						</div>
						<img
							alt="chevron"
							className="downsideChevronImg"
							src={downsideChevron}
						/>
					</>
				)}
			</button>
			<ul className={`languageMenu ${open ? 'open' : ''}`}>
				{LANGUAGES.filter((lang) => lang.language !== selectedLang).map((lang) => (
					<li
						key={lang.language}
						title={lang.name}
						onClick={() => {
							i18n.changeLanguage(lang.language)
							setOpen(false)
						}}
					>
						<span>{lang.acronim}</span>
						<img
							src={lang.flag}
							alt={lang.name}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DropdownComponent
