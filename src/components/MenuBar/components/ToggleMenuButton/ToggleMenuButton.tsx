import { faBars, faCaretCircleDown } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ToggleMenuButton.module.css'

interface Props {
    isNavigating: boolean,
    toggleNavigation: () => void
}

const ToggleMenuButton = ({ isNavigating, toggleNavigation }: Props) => {
    return (
        <button className={styles.button} onClick={toggleNavigation}>
            <FontAwesomeIcon 
                className={styles.icon} 
                icon={!isNavigating ? faBars : faCaretCircleDown}
            />
        </button>
    )
}

export default ToggleMenuButton;
