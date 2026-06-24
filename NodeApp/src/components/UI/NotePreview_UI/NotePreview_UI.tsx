import { useContext } from 'react'
import styles from './NotePreview_UI.module.css'
import { SelectedNoteContext } from '../../../context/SelectedNoteContext'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'

interface Props{
  id: number
}

function NotePreview_UI({id}:Props) {

  const context = useContext(SelectedNoteContext)
  if(!context){
    throw new Error("")
  }
  const {setSelected} = context

  const notes = useSelector((state:RootState) => state.notes)
  const note = notes.notes.find((n) => n.id == id)

  return (
    <article className={styles.article} onClick={() => setSelected(`${id}`)}>
      
      <h5 className={styles.article_h}>
        {note?.name}
      </h5>

      <p className={styles.p}>
        {note?.text}
      </p>

    </article>
  )
}

export default NotePreview_UI
