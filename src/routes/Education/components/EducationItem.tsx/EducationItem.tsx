import styles from './EducationItem.module.css'

interface Props {
    title: string
    institution: string
    startDate: string
    endDate: string
    image: string
}

const EducationItem = ({
    title,
    institution,
    startDate,
    endDate,
    image
}: Props) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={image}/>
            <div className={styles.infoContainer}>
                <h2>{title}</h2>
                <h3>{institution}</h3>
                <p>{startDate} - {endDate}</p>
            </div>
        </div>
    )
}

export default EducationItem
