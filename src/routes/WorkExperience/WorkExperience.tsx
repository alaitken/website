import WorkExperienceItem from './components/WorkExperienceItem/WorkExperienceItem'
import styles from './WorkExperience.module.css'
import MdiumLogo from './images/mdium/logo.png'
import ReportMateLogo from './images/reportmate/logo.png'
import BellLogo from './images/bell/logo.png'
import Title from '../../components/Title/Title'

const WorkExperience = () => {
    return (
        <div 
            className={styles.container}
        >
            <Title>Work Experience</Title>
            <WorkExperienceItem 
                title='Co-Founder & Chief Technology Officer'
                logo={MdiumLogo}
                companyName='Mdium'
                startDate='Aug. 2020'
                endDate='Oct. 2021'
                location="St. John's, NL"
                link='https://www.mdium.ca'
                isFocus={true}
            >
                Mdium is a website application designed for the secure transfer 
                of photos, videos and files between all your devices
            </WorkExperienceItem>
            <div className={styles.bottomContainer}>
                <WorkExperienceItem 
                    title='Full Stack Software Developer'
                    logo={ReportMateLogo}
                    companyName='ReportMate Inc.'
                    startDate='Aug. 2020'
                    endDate='Oct. 2021'
                    location="St. John's, NL"
                    link='https://www.reportmate.ca'
                    style={{maxWidth: '47%'}}
                >
                    I built platform to aide physicians in creating medico-legal reports 
                    through computer vision technology to organize, search, and extract 
                    critical information from physical patient records as a sole developer
                </WorkExperienceItem>
                <WorkExperienceItem 
                    title='Engineering Implementation Manager'
                    logo={BellLogo}
                    companyName='Bell Canada'
                    startDate='Sep. 2019'
                    endDate='Dec. 2019'
                    location="St. John's, NL"
                    link='https://www.bell.ca'
                    style={{maxWidth: '47%'}}
                >
                    I planned and detailed the modernizing of two solar radio sites with 
                    an expenditure of $250,000 each. Day-to-day, I scheduled and managed 
                    the implementation of electrical and optical fiber network projects
                </WorkExperienceItem>
            </div>
        </div>
    )
}

export default WorkExperience
