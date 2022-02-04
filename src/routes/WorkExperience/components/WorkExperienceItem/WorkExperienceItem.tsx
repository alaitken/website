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
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.companyName}>{companyName}</h3>
            <img className={styles.img} src={logo}/>
            <div className={styles.infoContainer}>
                <p className={styles.date}>{startDate} - {endDate}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <p className={styles.desc}>{desc}</p>
            <button className={styles.button} onClick={() => window.open(link)}>Go to website</button>
        </div>
    )
}

export default WorkExperienceItem
