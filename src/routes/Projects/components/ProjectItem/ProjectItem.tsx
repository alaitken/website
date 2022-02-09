import { FC } from 'react'
import ProjectDate from '../../../WorkExperience/components/WorkExperienceItem/components/ProjectDate/ProjectDate'
import ProjectTitle from '../../../WorkExperience/components/WorkExperienceItem/components/ProjectTitle/ProjectTitle'
import styles from './ProjectItem.module.css'

interface Props {
    title: string
    images: string[]
    startDate: string
    endDate: string
    link: string
    style?: {}
    isFocus?: boolean
}

const ProjectItem: FC<Props> = ({
    title,
    images,
    startDate,
    endDate,
    link,
    children,
    style,
    isFocus = false
}) => {
    return (
        <div className={styles.container} style={style}>
            <div className={styles.imageContainer}>
                { images.map((image, i) => (
                    <img 
                        className={`${styles.image} ${isFocus && styles.isFocus}`}
                        key={i}
                        src={image}
                    />))
                }
            </div>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDate startDate={startDate} endDate={endDate}/>
            <p className={styles.desc}>{children}</p>
            <button className={styles.button} onClick={() => window.open(link)}>See project...</button>
        </div>
    )
}

export default ProjectItem
