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
                    <p className={styles.date}>{startDate} - {endDate}</p>
                    <p className={styles.location}>{location}</p>
                    <button className={styles.button} onClick={() => window.open(link)}>Go to website</button>
                </div>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default WorkExperienceItem
