import { FC } from 'react'
import styles from './ProjectTitle.module.css'

const ProjectTitle: FC = ({ children }) => {
    return (
        <h2 className={styles.title}>{children}</h2>
    )
}

export default ProjectTitle