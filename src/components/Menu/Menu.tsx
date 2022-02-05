import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

interface Props {
    toggleNavigation: () => void
}

const Menu = ({ toggleNavigation }: Props) => {
    return (
        <ul className={styles.container}>
            <li><Link to='/' className='link' onClick={toggleNavigation}>Overview</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/education' className='link' onClick={toggleNavigation}>Education</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/projects' className='link' onClick={toggleNavigation}>Projects</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/work-experience' className='link' onClick={toggleNavigation}>Work Experience</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/resume' className='link' onClick={toggleNavigation}>Resume</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/contact-me' className='link' onClick={toggleNavigation}>Contact Me</Link></li>
        </ul>
    )
}

export default Menu
