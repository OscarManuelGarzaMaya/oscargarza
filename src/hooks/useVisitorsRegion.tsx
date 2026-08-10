import { useEffect, useState } from 'react'

const useVisitorRegion = () => {
    const [countryCode, setCountryCode] = useState<'MX' | 'CA'>('MX')

    useEffect(()=>{
        fetch('https://ipwho.is/')
									.then((res) => res.json())
									.then((data) => {
										if (data?.country_code != 'MX') {
											setCountryCode('CA')
										}
									})
									.catch(() => {})
                                },[])
    return countryCode
}

export default useVisitorRegion