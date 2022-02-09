import Title from '../../components/Title/Title'
import ProjectItem from './components/ProjectItem/ProjectItem'
import styles from './Projects.module.css'
import AmelloLogoWhite from './images/amello/AmelloLogoWhite.png'
import MdiumLogo from '../WorkExperience/images/mdium/logo.png'
import DMVLogo from './images/dmv/DMV.png'


const Projects = () => {
    return (
        <div className={styles.container}>
            <Title>Projects</Title>
            <ProjectItem 
                title='Mdium'
                images={[MdiumLogo]}
                startDate='May. 2021'
                endDate='Present'
                link='https://www.mdium.ca'
                isFocus={true}
            >
                Mdium is a website application designed for the secure transfer 
                of photos, videos and files between all your devices
            </ProjectItem>
            <div className={styles.bottomContainer}>
                <ProjectItem 
                    title='Amello!'
                    images={[AmelloLogoWhite]}
                    startDate='May. 2021'
                    endDate='Present'
                    link='https://www.amello.ca'
                >
                    Meet new friends through interest based co-operative activities on Amello!
                </ProjectItem>
                <ProjectItem 
                    title='DMV Simulator'
                    images={[DMVLogo]}
                    startDate='Jan. 2020'
                    endDate='Apr. 2020'
                    link=''
                >
                    Explore the thrilling adventure of renewing your license with wild twists and 
                    turns. Find your own alternative ending through engaging dialogue options and 
                    gameplay.
                </ProjectItem>
            </div>
        </div>
    )
}

export default Projects
