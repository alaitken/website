import styles from './Title.module.css'

interface Props {
    
}

const Title: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{children}</h1>
            <hr className={styles.hr}/>
        </div>
    )
}

export default Title
