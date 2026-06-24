import Button_UI from '../Button_UI/Button_UI'
import Input_UI from '../Input_UI/Input_UI'

import React, { useState, type SetStateAction } from 'react'

import styles from './Modal_UI.module.css'
import { useDispatch } from 'react-redux'
import { addProjects } from '../../../store/slices/FoldersSlice'

interface Props {
  visible: string,
  setVisible: React.Dispatch<SetStateAction<string>>
}

interface Folder {
  id: number,
  name: string
}

function Modal_UI({visible, setVisible}:Props) {


  const [folder, setFolder] = useState<string>("")

  let newFolder:Folder = {id: Date.now(), name: folder}

  const dispatch = useDispatch()

  function PushFolder(string:string){

    if(newFolder.name.length < 1){
      throw new Error("Не введено название")
    }

    dispatch(addProjects(newFolder))


    setVisible(string)
  }


  return (
    <div className={visible == "n" ? styles.modal_notVisible : styles.modal_visible} onClick={() => setVisible("n")} onSubmit={(e) => {e.preventDefault()}}>

      <form className={styles.modal_form} onClick={(e) => e.stopPropagation()}>

        <h1 className={styles.form_h}>
          Создать папку
        </h1>

        <Input_UI  string={folder} setString={setFolder} placeholder='Введите название папки'/>

        <Button_UI text='Создать' OnClick={PushFolder} result='n'/>

      </form>

    </div>
    
  )
}

export default Modal_UI