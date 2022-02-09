import { faCalendarAlt } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ProjectDate.module.css'

interface Props {
    startDate: string
    endDate: string
}

const ProjectDate = ({ startDate, endDate }: Props) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt}/>
            <p className={styles.date}>{startDate} - {endDate}</p>
        </div>
    )   
}

export default ProjectDate