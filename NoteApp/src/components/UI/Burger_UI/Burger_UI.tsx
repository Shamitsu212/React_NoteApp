import styles from './Burger_UI.module.css'

import { BurgerContext } from '../../../context/BurgerContext'
import { useRequiredContext } from '../../../utils/useRequiredContext'

function Burger_UI() {

    const { menuOpen, setMenuOpen } = useRequiredContext( BurgerContext,'BurgerContext')

    return (
        <button className={styles.button} onClick={() => setMenuOpen(prev => !prev)}>

            <span className={menuOpen ? styles.rotated : styles.r}>
                ☰
            </span>
            
        </button>
    )
}

export default Burger_UI