import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoButton = () => {
    const navigate = useNavigate()
    return <button onClick={() => navigate('/')}>AA</button>
}

export default LogoButton
