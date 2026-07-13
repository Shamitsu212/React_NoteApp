import styles from './Modal_UI.module.css'

import Button_UI from '../Button_UI/Button_UI'
import Input_UI from '../Input_UI/Input_UI'

import { useState, type Dispatch,type SetStateAction} from 'react'

import { useCreateFolder } from '../../../utils/useCreateFolder'

interface Props {

  visible: string
  setVisible: Dispatch<SetStateAction<string>>

}

function Modal_UI({visible, setVisible,}: Props) {
  
  const [folder, setFolder] = useState('')

  const createFolder = useCreateFolder()

  function pushFolder(result: string) {

    const folderName = folder.trim()

    if (!folderName) return

    createFolder(folderName)
    setFolder('')
    setVisible(result)
  }

  return (

    <div className={ visible === 'n' ? styles.modal_notVisible : styles.modal_visible} onClick={() => setVisible('n')}>

      <form
        className={styles.modal_form}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
      >

        <h1 className={styles.form_h}>
          Создать папку
        </h1>

        <Input_UI
          string={folder}
          setString={setFolder}
          placeholder='Введите название папки'
        />

        <Button_UI
          text='Создать'
          OnClick={pushFolder}
          result='n'
          hideText={false}
        />

      </form>

    </div>

  )
}

export default Modal_UI