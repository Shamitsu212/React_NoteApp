import styles from './Aside.module.css'

import Aside_Notes from './Aside_Notes/Aside_Notes'
import Aside_Projects from './Aside_Menu/Aside_Menu'

function Aside() {

  return (
    <aside className={styles.aside}>

      <div className={styles.aside__projects}>
        <Aside_Projects />
      </div>

      <div className={styles.aside__tasks}>
        <Aside_Notes />
      </div>

    </aside>
  )
}

export default Aside