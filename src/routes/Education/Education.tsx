import EducationItem from './components/EducationItem.tsx/EducationItem'
import styles from './Education.module.css'
import MunLogo from './images/mun.png'
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
        </div>
    )
}

export default Education
