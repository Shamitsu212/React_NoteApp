import Input_UI from '../../UI/Input_UI/Input_UI'
import TextArea_UI from '../../UI/TextArea_UI/TextArea_UI'

import { useContext, useEffect, useState } from 'react'

import styles from './AddNote.module.css'
import { SelectedNoteContext } from '../../../context/SelectedNoteContext'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
import { editNote } from '../../../store/slices/NotesSlice'

function AddNote() {

  const context = useContext(SelectedNoteContext)

  if (!context) {
    throw new Error("SelectedNoteContext not found")
  }

  const { selected } = context

  const notes = useSelector(
    (state: RootState) => state.notes
  )

  const currentNote = notes.notes.find(
    (n) => n.id === Number(selected)
  )

  const [name, setName] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {
    if (currentNote) {
      setName(currentNote.name)
      setText(currentNote.text)
    } else {
      setName("")
      setText("")
    }
  }, [currentNote])

  const dispatch = useDispatch()

  useEffect(() => {

  if (!currentNote) return

  const timer = setTimeout(() => {

    dispatch(
      editNote({
        ...currentNote,
        name,
        text
      })
    )

  }, 500)

  return () => clearTimeout(timer)

}, [name, text, currentNote])

  return (
    <form className={styles.form}>

      <Input_UI
        string={name}
        setString={setName}
        placeholder="Название записи"
        isNote="y"
      />

      <TextArea_UI
        string={text}
        setString={setText}
        placeholder="Текст записи"
      />

    </form>
  )
}

export default AddNote