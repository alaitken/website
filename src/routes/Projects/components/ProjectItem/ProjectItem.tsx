import styles from './ProjectItem.module.css'

interface Props {
    title: string
    images: string[]
    startDate: string
    endDate: string
    desc: string
    link: string
}

const ProjectItem = ({
    title,
    images,
    startDate,
    endDate,
    desc,
    link
}: Props) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imageContainer}>
                { images.map((image, i) => (
                    <img 
                        className={styles.image} 
                        key={i}
                        src={image}
                    />))
                }
            </div>
            <p className={styles.date}>{startDate} - {endDate}</p>
            <p className={styles.desc}>{desc}</p>
            <button className={styles.button} onClick={() => window.open(link)}>See project...</button>
        </div>
    )
}

export default ProjectItem
