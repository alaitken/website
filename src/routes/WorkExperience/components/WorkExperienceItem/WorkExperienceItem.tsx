import { faCalendarAlt, faGlobe } from '@fortawesome/pro-duotone-svg-icons'
import { faMapPin } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './WorkExperienceItem.module.css'

interface Props {
    title: string
    logo: string
    desc: string
    companyName: string
    startDate: string
    endDate: string
    location: string
    link: string
}

const WorkExperienceItem = ({
    title,
    logo,
    desc,
    companyName,
    startDate,
    endDate,
    location,
    link
}: Props) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={logo}/>
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.companyName}>{companyName}</h3>
                <div className={styles.innerInfoContainer}>
                    <div className={styles.dateContainer}>
                        <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt}/>
                        <p className={styles.date}>{startDate} - {endDate}</p>
                    </div>
                    <div className={styles.locationContainer}>
                        <FontAwesomeIcon className={styles.icon} icon={faGlobe}/>
                        <p className={styles.location}>{location}</p>
                    </div>
                </div>
                <button className={styles.button} onClick={() => window.open(link)}>Go to website</button>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default WorkExperienceItem
