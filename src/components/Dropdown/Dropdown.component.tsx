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

	const [languageList, setLangugeList] = useState<
		Array<{
			acronim: string
			flag: string
			isSelected: boolean
			language: string
			name: string
		}>
	>([
		{
			acronim: 'EN',
			flag: americanFlag,
			isSelected: true,
			language: 'en',
			name: 'English',
		},
		{
			acronim: 'SP',
			flag: mexicanFlag,
			isSelected: false,
			language: 'es',
			name: 'Spanish',
		},
		{
			acronim: 'FR',
			flag: franceFlag,
			isSelected: false,
			language: 'fr',
			name: 'French',
		},
	])

	return (
		<div className="langDropdown">
			<button
				className="langTrigger"
				onClick={() => setOpen(!open)}
			>
				{languageList
					.filter((lang) => lang.isSelected)
					.map((lang) => (
						<>
							<div className="langLabel">
								<span>{lang.acronim}</span>
								<img
									src={lang.flag}
									alt={lang.name}
								/>
							</div>
							<img
								alt="chevron"
								className="downsideChevronImg"
								src={downsideChevron}
							/>
						</>
					))}
			</button>
			<ul className={`languageMenu ${open ? 'open' : ''}`}>
				{languageList
					.filter((lang) => !lang.isSelected)
					.map((lang) => (
						<li
							title={lang.name}
							onClick={() => {
								i18n.changeLanguage(lang.language)
								setLangugeList((currentLangs) =>
									currentLangs.map((currentLang) => ({
										...currentLang,
										isSelected: currentLang.language === lang.language,
									})),
								)
							}}
						>
							<span>{lang.acronim}</span>
							<img
								alt={lang.name}
								src={lang.flag}
							/>
						</li>
					))}
			</ul>
		</div>
	)
}

export default DropdownComponent
