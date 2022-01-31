import { useEffect, useState } from 'react'

const useFooter = () => {
    const [year, setYear] = useState<number>()
    
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return {
        year
    }
}

export default useFooter
