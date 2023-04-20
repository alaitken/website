import Title from '../../components/Title/Title'
import styles from './ContactMe.module.css'

const ContactMe = () => {
    return (
        <div className={styles.container}>
            <Title>Contact Me</Title>
            <p>Please send enquiries to <a href='mailto:austin@teckie.io'>austin@teckie.io</a></p>
        </div>
    )
}

export default ContactMe
