import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import useFooter from './useFooter'

const Footer = () => {

    const { year } = useFooter()

    return (
        <footer className={styles.footer}>
            {year}
            <div>
                <Link to='/'>Overview</Link>
                <Link to='/education'>Education</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/work-experience'>Work Experience</Link>
                <Link to='/contact-us'>Contact Me</Link>
            </div>
        </footer>
    )
}

export default Footer
