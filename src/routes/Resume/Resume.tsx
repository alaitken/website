import styles from './Resume.module.css'
import resume from './resume.png'

const Resume = () => {
    return (
        <div className={styles.container}>
            <h1>Resume</h1>
            <a href={resume} download>Download</a>
            <img className={styles.image} src={resume}/>
        </div>
    )
}

export default Resume