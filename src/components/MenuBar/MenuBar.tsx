import styles from './MenuBar.module.css'
import LogoButton from './components/LogoButton/LogoButton'
import SignInButton from './components/SignInButton/SignInButton'
import ToggleMenuButton from './components/ToggleMenuButton/ToggleMenuButton'
import { Link } from 'react-router-dom'

interface Props {
    isNavigating: boolean
    toggleNavigation: () => void
}

const MenuBar = ({ 
    isNavigating, 
    toggleNavigation 
}: Props) => {
    return (
        <div className={styles.container}>
            <ToggleMenuButton 
                isNavigating={isNavigating} 
                toggleNavigation={toggleNavigation}
            />
            <div className={styles.innerContainer}>
                <Link to='/' className='link' onClick={toggleNavigation}>Overview</Link>
                <Link to='/education' className='link' onClick={toggleNavigation}>Education</Link>
                <Link to='/projects' className='link' onClick={toggleNavigation}>Projects</Link>
                <Link to='/work-experience' className='link' onClick={toggleNavigation}>Work Experience</Link>
                <Link to='/resume' className='link' onClick={toggleNavigation}>Resume</Link>
                <Link to='/contact-me' className='link' onClick={toggleNavigation}>Contact Me</Link>
            </div>
        </div>
    )
}

export default MenuBar
