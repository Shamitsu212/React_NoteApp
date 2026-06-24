import styles from './Aside_Menu.module.css'
import { useSelector } from 'react-redux'

import type { RootState } from '../../../../store/store'
import Button_UI from '../../../UI/Button_UI/Button_UI'
import { FolderIcon, NotebookPenIcon, StarIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { SelectedFolderContext } from '../../../../context/SelectedFolderContext'
import Modal_UI from '../../../UI/Modal_UI/Modal_UI'

function Aside_Projects() {

  const folders = useSelector((state: RootState) => state.folders)


  const context = useContext(SelectedFolderContext)
  if(!context){
    throw new Error("Ошибка в контексте SelectedContext")
  }
  const {setSelected} = context

  const [visible, setVisible] = useState("n")


  return (
    <div className={styles.asideMenu}>

      <div className={styles.asideMenu_category}>
        <NotebookPenIcon size={30}/>
        <Button_UI text='Все заметки' result='All' OnClick={setSelected}/>
      </div>
      
      <div className={styles.asideMenu_category}>
        <StarIcon size={30}/>
        <Button_UI text='Избранные' result='favorite' OnClick={setSelected}/>
      </div>


      <div className={styles.asideMenu_folders}>
        
        <h3 className={styles.folders_h}>
          Папки 
          
          <div className={styles.folders__button}>
            <Button_UI text='+' OnClick={setVisible} result='y'/>
          </div>
          
        </h3>

        {folders.folders.map((f) => (
          <div className={styles.folders_folder}>
            <FolderIcon size={30}/>
            <Button_UI text={f.name} result={`${f.id}`} OnClick={setSelected}/>
          </div>
        ))}

      </div>

      <Modal_UI visible={visible} setVisible={setVisible}/>

    </div>
  )
}

export default Aside_Projects