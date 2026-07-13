import styles from './ChangeThemeButton_UI.module.css'

import { useRequiredContext } from '../../../utils/useRequiredContext'
import { ThemeContext } from '../../../context/ThemeContext'

import { MoonStarIcon, SunIcon } from 'lucide-react'



function ChangeThemeButton_UI() {

    const { theme, setTheme } = useRequiredContext(ThemeContext, 'ThemeContext')

    const toggleTheme = () => {setTheme(theme === 'light' ? 'night' : 'light')}

    return (
    
      <button className={styles.button} onClick={() => toggleTheme()}>
        
          {theme == "light"  
              ?
              <MoonStarIcon size={28} color='black'/>
              :
              <SunIcon size={28} color='white'/>
          }
          
        
      </button>
    
    )
  
}

export default ChangeThemeButton_UI