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
            {year}
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link to='/' onClick={closeNavigation}>Overview</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/education' onClick={closeNavigation}>Education</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/projects' onClick={closeNavigation}>Projects</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/work-experience' onClick={closeNavigation}>Work Experience</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/contact-me' onClick={closeNavigation}>Contact Me</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
