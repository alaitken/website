import styles from './ProjectLocation.module.css'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/pro-duotone-svg-icons'

interface Props {
    location: string
}

const ProjectLocation = ({ location }: Props) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={faGlobe}/>
            <p className={styles.location}>{location}</p>
        </div>
    )
}

export default ProjectLocation