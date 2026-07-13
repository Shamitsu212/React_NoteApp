import styles from './Input_UI.module.css'

import type React from 'react'
import type { SetStateAction } from 'react'

interface Props {
    
  string: string,
  setString: React.Dispatch<SetStateAction<string>>,

  placeholder: string,
  isNote?: string ,

  disabled?: boolean
}

function Input_UI({string, setString, placeholder, isNote, disabled}:Props) {

  return (

    <input 
        className={ isNote ? styles.input_note : styles.input} 
        value={string} 
        placeholder={placeholder} 
        onChange={(e) => setString(e.target.value)}    
        disabled={disabled}
    />

  )

}

export default Input_UI