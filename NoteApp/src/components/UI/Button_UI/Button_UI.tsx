import styles from './Button_UI.module.css'

import type { ReactNode } from 'react'

interface Props {
  text: string
  icon?: ReactNode
  hideText?: boolean
  OnClick: (result: string) => void
  result: string
}

function Button_UI({ text, icon, hideText = false, OnClick, result}: Props) {

  return (
    <button className={styles.button} onClick={() => OnClick(result)}>

      {icon}

      <span className={hideText ? styles.hideText : ''}>
        {text}
      </span>

    </button>
  )
}

export default Button_UI