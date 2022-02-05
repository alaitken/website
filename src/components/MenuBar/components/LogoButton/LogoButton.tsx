import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoButton = () => {
    const navigate = useNavigate()
    return <button onClick={() => navigate('/')}>Austin Aitken</button>
}

export default LogoButton
