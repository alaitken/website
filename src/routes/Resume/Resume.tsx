import Title from '../../components/Title/Title'
import styles from './Resume.module.css'
import resume from './resume.png'

const Resume = () => {
    return (
        <div className={styles.container}>
            <Title>Resume</Title>
            <a href={resume} download>Download</a>
            <img className={styles.image} src={resume}/>
        </div>
    )
}

export default Resume