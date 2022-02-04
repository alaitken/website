import EducationItem from './components/EducationItem.tsx/EducationItem'
import styles from './Education.module.css'
import MunLogo from './images/mun.jpeg'
import GonzagaLogo from './images/gonzaga.png'

const Education = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 style={{marginBottom: '0px', paddingBottom: '0px'}}>Education</h1>
                <hr style={{marginTop: '0px', paddingTop: '0px'}}/>
            </div>
            <EducationItem 
                title='Bachelor of Computer Engineering'
                institution='Memorial University of Newfoundland'
                startDate='Sep. 2017'
                endDate='Apr. 2022'
                image={MunLogo}
            />
            <hr />
            <EducationItem 
                title='High School Diploma'
                institution='Gonzaga Regional Highschool'
                startDate='Sep. 2014'
                endDate='Apr. 2017'
                image={GonzagaLogo}
            />
        </div>
    )
}

export default Education
