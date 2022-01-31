import { useState } from 'react'

const useApp = () => {
    const [isNavigating, setIsNavigating] = useState<boolean>(false)

    const toggleNavigation = () => {
        setIsNavigating(prev => !prev)
    }

    return {
        isNavigating,
        toggleNavigation
    }
}

export default useApp
