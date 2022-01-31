import styles from './MenuBar.module.css'
import LogoButton from './components/LogoButton/LogoButton'
import SignInButton from './components/SignInButton/SignInButton'
import ToggleMenuButton from './components/ToggleMenuButton/ToggleMenuButton'

interface Props {
    isNavigating: boolean
    toggleNavigation: () => void
}

const MenuBar = ({ 
    isNavigating, 
    toggleNavigation 
}: Props) => {
    return (
        <div className={styles.container}>
            <ToggleMenuButton 
                isNavigating={isNavigating} 
                toggleNavigation={toggleNavigation}
            />
            <LogoButton />
            <SignInButton />
        </div>
    )
}

export default MenuBar
