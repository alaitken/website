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
            <div className={styles.imgContainer}>
                <img className={styles.img} src={PP}/>
                <div className={styles.infoContainer}>
                    <p style={{marginTop: '0px', textDecoration: 'underline', fontSize: '1.4rem'}}>Key Achievements:</p>
                    <ul>
                        <li className={styles.li}>Won a Hackathon with a Wildlife Trafficking Alert</li>
                        <li className={styles.li}>Co-Founded a Start-up that reached Tens of Thousands of Users.</li>
                        <li className={styles.li}>Won the Exemplary Performance Award for All Work Placements.</li>
                        <li className={styles.li}>Experienced Software Developer</li>
                        <li className={styles.li}>Seasonal Time-Travler.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage
