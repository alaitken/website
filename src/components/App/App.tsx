import { Route, Routes } from 'react-router-dom'
import Achievements from '../../routes/Achievements/Achievements'
import ContactMe from '../../routes/ContactMe/ContactMe'
import Education from '../../routes/Education/Education'
import HomePage from '../../routes/HomePage/HomePage'
import Projects from '../../routes/Projects/Projects'
import TechSkills from '../../routes/TechSkills/TechSkills'
import WorkExperience from '../../routes/WorkExperience/WorkExperience'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import MenuBar from '../MenuBar/MenuBar'
import styles from './App.module.css'
import useApp from './useApp'

const App = () => {
    const { isNavigating, toggleNavigation, closeNavigation } = useApp()
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <MenuBar 
                    isNavigating={isNavigating} 
                    toggleNavigation={toggleNavigation}
                />
            </div>
            <div className={styles.bodyContainer}>
                { isNavigating ?
                    <Menu toggleNavigation={toggleNavigation}/>
                    :
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/education' element={<Education />}/>
                        <Route path='/projects' element={<Projects />}/>
                        <Route path='/work-experience' element={<WorkExperience />}/>
                        <Route path='/achievements' element={<Achievements />}/>
                        <Route path='/tech-skills' element={<TechSkills />}/>
                        <Route path='/contact-me' element={<ContactMe />}/>
                    </Routes>
                }
            </div>
            <Footer closeNavigation={closeNavigation}/>
        </div>
    )
}

export default App

