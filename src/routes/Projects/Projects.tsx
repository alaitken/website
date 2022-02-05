import Title from '../../components/Title/Title'
import ProjectItem from './components/ProjectItem/ProjectItem'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.container}>
            <Title>Projects</Title>
            <ProjectItem 
                title='Amello!'
                images={[]}
                startDate='May. 2021'
                endDate='Present'
                desc=''
                link='https://www.amello.ca'
            />
            <ProjectItem 
                title='DMV Simulator'
                images={[]}
                startDate='Jan. 2020'
                endDate='Apr. 2020'
                desc=''
                link=''
            />
        </div>
    )
}

export default Projects
