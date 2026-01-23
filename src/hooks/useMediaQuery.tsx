import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

	useEffect(() => {
		const media = window.matchMedia(query)

		const listener = () => setMatches(media.matches)

		// Compatibilidad total
		if (media.addEventListener) {
			media.addEventListener('change', listener)
		} else {
			media.addListener(listener)
		}

		return () => {
			if (media.removeEventListener) {
				media.removeEventListener('change', listener)
			} else {
				media.removeListener(listener)
			}
		}
	}, [query])

	return matches
}
