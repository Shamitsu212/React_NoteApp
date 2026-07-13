import styles from './Main_Page.module.css'

import Aside from '../../layout/Aside/Aside'
import Header from '../../layout/Header/Header'
import AddNote from '../../layout/AddNote/AddNote'

import { BurgerContext } from '../../../context/BurgerContext'
import { useRequiredContext } from '../../../utils/useRequiredContext'

function Main_Page() {

  const { menuOpen } = useRequiredContext( BurgerContext, 'BurgerContext')

  const isMobile = window.innerWidth <= 768

  return (
    <div className={styles.Container}>

      <div className={styles.Container_header}>
        <Header />
      </div>

      <div className={styles.Container_row}>

        {isMobile ? 

        (
          menuOpen ? <Aside /> : <AddNote />
        ) 

        : 
        
        (
          <>
            <Aside />
            <AddNote />
          </>
        )
        
        }

      </div>

    </div>
  )
}

export default Main_Page