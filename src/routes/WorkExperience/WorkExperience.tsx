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
                desc=''
                companyName='Mdium'
                startDate='Aug. 2020'
                endDate='Oct. 2021'
                location="St. John's, Newfoundland"
                link='https://www.mdium.ca'
            />
            <div className={styles.bottomContainer}>
                <WorkExperienceItem 
                    title='Full Stack Software Developer'
                    logo={ReportMateLogo}
                    desc=''
                    companyName='ReportMate Inc.'
                    startDate='Aug. 2020'
                    endDate='Oct. 2021'
                    location="St. John's, Newfoundland"
                    link='https://www.reportmate.ca'
                /> 
                <WorkExperienceItem 
                    title='Engineering Implementation Manager'
                    logo={BellLogo}
                    desc=''
                    companyName='Bell Canada'
                    startDate='Sep. 2019'
                    endDate='Dec. 2019'
                    location="St. John's, Newfoundland"
                    link='https://www.bell.ca'
                />
            </div>
        </div>
    )
}

export default WorkExperience
