import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import useFooter from './useFooter'

interface Props {
    closeNavigation: () => void
}

const Footer = ({ closeNavigation }: Props) => {

    const { year } = useFooter()

    return (
        <footer className={styles.footer}>
            <p className={styles.year}>austinaitken.com @{year}</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link to='/' className='link' onClick={closeNavigation}>Overview</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/education' className='link' onClick={closeNavigation}>Education</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/projects' className='link' onClick={closeNavigation}>Projects</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/work-experience' className='link' onClick={closeNavigation}>Work Experience</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/contact-me' className='link' onClick={closeNavigation}>Contact Me</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
