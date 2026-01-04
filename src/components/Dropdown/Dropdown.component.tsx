import { useState } from 'react'
import '../../assets/globals.css'

import './Dropdown.component.style.css'

// Flags icons
import americanFlag from '../../assets/images/flags/american-flag.svg'
import mexicanFlag from '../../assets/images/flags/mexican-flag.svg'
import franceFlag from '../../assets/images/flags/france-flag.svg'

// Icons
import downsideChevron from '../../assets/images/DownsideChevron.svg'

const DropdownComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className="langDropdown">
			<button
				className="langTrigger"
				onClick={() => setOpen(!open)}
			>
				<span className="langLabel">
					<span>SP</span>
					<img
						src={mexicanFlag}
						alt="Spanish"
					/>
				</span>
				<img
					src={downsideChevron}
					alt="chevron"
					className="downsideChevronImg"
				/>
			</button>
			<ul className={`languageMenu ${open ? 'open' : ''}`}>
				<li>
					{/* 
						Todo: Add an algorithm to split the text on max of 3 chars and display full world on a tooltip
					*/}
					<span>ENG</span>
					<img
						src={americanFlag}
						alt="English"
						className="flagIcon"
					/>
				</li>
				{/* 
					Todo: Add algorithm to display this divider between all items but above the first one and be need the last one
				*/}
				<hr className="langDivider" />
				<li>
					<span>FR</span>
					<img
						src={franceFlag}
						alt="French"
					/>
				</li>
			</ul>
		</div>
	)
}

export default DropdownComponent
