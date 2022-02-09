import Title from '../../components/Title/Title'
import styles from './HomePage.module.css'
import PP from './images/pp.jpg'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Title>Overview</Title>
            <p className={styles.intro}>
                Welcome to my personal website!
            </p>
            <p className={styles.intro}>Please make yourself comfortable and get to know me a little...</p>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={PP}/>
                <div className={styles.infoContainer}>
                    <p style={{marginTop: '0px', textDecoration: 'underline', fontSize: '1.4rem'}}>Key Attributes:</p>
                    <ul>
                        <li className={styles.li}>Experienced Software Developer</li>
                        <li className={styles.li}>Relentless Work Ethic</li>
                        <li className={styles.li}>Aspiring Ukulele One-Man-Band</li>
                        <li className={styles.li}>Seasonal Time-Travler</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage
