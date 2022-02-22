import Title from '../../components/Title/Title'
import styles from './ContactMe.module.css'

const ContactMe = () => {
    return (
        <div className={styles.container}>
            <Title>Contact Me</Title>
            <p>Feel free to email <a href='mailto:alaitken@mun.ca'>alaitken@mun.ca</a></p>
        </div>
    )
}

export default ContactMe
