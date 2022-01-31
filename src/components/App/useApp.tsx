import { useState } from 'react'

const useApp = () => {
    const [isNavigating, setIsNavigating] = useState<boolean>(false)

    const toggleNavigation = () => {
        setIsNavigating(prev => !prev)
    }

    const closeNavigation = () => {
        setIsNavigating(false)
    }
    

    return {
        isNavigating,
        toggleNavigation,
        closeNavigation
    }
}

export default useApp
