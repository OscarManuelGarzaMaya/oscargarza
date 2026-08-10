import { useEffect, useState } from 'react'

const useVisitorRegion = () => {
    const [region, setRegion] = useState<'tapatía' | 'canadiense'>('tapatía')

    useEffect(()=>{
        fetch('https://ipwho.is/')
									.then((res) => res.json())
									.then((data) => {
										if (data?.country_code === 'CA') {
											setRegion('canadiense')
										}
									})
									.catch(() => {})
                                },[])
    return region
}

export default useVisitorRegion