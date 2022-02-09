import { faCalendarAlt, faGlobe } from '@fortawesome/pro-duotone-svg-icons'
import { faMapPin } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import ProjectDate from './components/ProjectDate/ProjectDate'
import ProjectLocation from './components/ProjectLocation/ProjectLocation'
import ProjectTitle from './components/ProjectTitle/ProjectTitle'
import styles from './WorkExperienceItem.module.css'

interface Props {
    title: string
    logo: string
    companyName: string
    startDate: string
    endDate: string
    location: string
    link: string
    isFocus?: boolean
    className?: string
    style?: {}
}

const WorkExperienceItem: FC<Props> = ({
    title,
    logo,
    companyName,
    startDate,
    endDate,
    location,
    link,
    isFocus = false,
    className,
    children,
    style
}) => {
    return (
        <div className={`${styles.container} ${className}`} style={style}>
            <div className={styles.imgContainer}>
                <img className={`${styles.img} ${isFocus && styles.isFocus}`} src={logo}/>
            </div>
            <div className={styles.infoContainer}>
                <ProjectTitle>{companyName}</ProjectTitle>
                <h3>{title}</h3>
                <div className={styles.innerInfoContainer}>
                    <ProjectDate startDate={startDate} endDate={endDate}/>
                    <ProjectLocation location={location}/>
                </div>
                <p className={styles.desc}>{children}</p>
                <button className={styles.button} onClick={() => window.open(link)}>Go to website</button>
            </div>
        </div>
    )
}

export default WorkExperienceItem
