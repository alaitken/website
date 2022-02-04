import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

interface Props {
    toggleNavigation: () => void
}

const Menu = ({ toggleNavigation }: Props) => {
    return (
        <ul className={styles.container}>
            <li><Link to='/' onClick={toggleNavigation}>Overview</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/education' onClick={toggleNavigation}>Education</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/projects' onClick={toggleNavigation}>Projects</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/work-experience' onClick={toggleNavigation}>Work Experience</Link></li>
            <hr className={styles.hr}/>
            <li><Link to='/contact-me' onClick={toggleNavigation}>Contact Me</Link></li>
        </ul>
    )
}

export default Menu
