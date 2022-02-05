import EducationItem from './components/EducationItem.tsx/EducationItem'
import styles from './Education.module.css'
import MunLogo from './images/mun.jpeg'
import GonzagaLogo from './images/gonzaga.png'
import Title from '../../components/Title/Title'

const Education = () => {
    return (
        <div className={styles.container}>
            <Title>Education</Title>
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
