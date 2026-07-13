import styles from './Aside_Menu.module.css'

import { useState } from 'react'

import Button_UI from '../../../UI/Button_UI/Button_UI'
import Modal_UI from '../../../UI/Modal_UI/Modal_UI'
import { FolderIcon, NotebookPenIcon, StarIcon } from 'lucide-react'

import { useSelector } from 'react-redux'
import type { RootState } from '../../../../store/store'

import { SelectedFolderContext } from '../../../../context/SelectedFolderContext'
import { useRequiredContext } from '../../../../utils/useRequiredContext'

function Aside_Projects() {

  const folders = useSelector((state: RootState) => state.folders)

  const { setSelected } = useRequiredContext( SelectedFolderContext, 'SelectedFolderContext')

  const [visible, setVisible] = useState("n")

  return (
    <div className={styles.asideMenu}>

      <Button_UI
        text="Все заметки"
        icon={<NotebookPenIcon size={30} />}
        hideText
        result="All"
        OnClick={setSelected}
      />

      <Button_UI
        text="Избранные"
        icon={<StarIcon size={30} />}
        hideText
        result="favorite"
        OnClick={setSelected}
      />

      <div className={styles.asideMenu_folders}>

        <h3 className={styles.folders_h}>
          Папки

          <div className={styles.folders__button}>

            <Button_UI
              text="+"
              result="y"
              OnClick={setVisible}
            />

          </div>

        </h3>

        {folders.folders.map((f, index) => (

          <Button_UI
            key={f.id}
            text={f.name}
            hideText
            icon={
              <div className={styles.folderIcon}>
                <FolderIcon size={30}/>
                <span className={styles.badge}>
                  {index + 1}
                </span>
              </div>
            }
            result={`${f.id}`}
            OnClick={setSelected}
          />

        ))}

      </div>

      <Modal_UI
        visible={visible}
        setVisible={setVisible}
      />

    </div>
  )
}

export default Aside_Projects