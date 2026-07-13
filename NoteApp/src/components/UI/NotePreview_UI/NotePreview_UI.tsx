import styles from './NotePreview_UI.module.css'

import { useRequiredContext } from '../../../utils/useRequiredContext'
import { SelectedNoteContext } from '../../../context/SelectedNoteContext'
import { BurgerContext } from '../../../context/BurgerContext'

import { useDispatch, useSelector } from 'react-redux'
import { favoriteNote, pinNote, removeNotes, unFavoriteNote, unPinNote } from '../../../store/slices/NotesSlice'

import type { RootState } from '../../../store/store'

import { PinIcon, PinOffIcon, StarIcon, TrashIcon } from 'lucide-react'

interface Props {
  id: number
}

function NotePreview_UI({ id }: Props) {

  const { setSelected } = useRequiredContext( SelectedNoteContext, 'SelectedNoteContext' )

  const { setMenuOpen } = useRequiredContext( BurgerContext, 'BurgerContext' )

  const notes = useSelector((state: RootState) => state.notes)
  const note = notes.notes.find((n) => n.id === id)

  const dispatch = useDispatch()

  if (!note) return null

  function openNote() {
    setSelected(`${id}`)

    if (window.innerWidth <= 768) {
      setMenuOpen(false)
    }

  }

  return (
    <article className={styles.article} onClick={openNote}>

      <div className={styles.article_buttonContainer}>

        {note.Pinned ? 

        (
          <button className={styles.buttonContainer_button} onClick={(e) => {
              e.stopPropagation()
              dispatch(unPinNote(note.id))
            }}
          >
            <PinOffIcon size={22} />
          </button>
        ) 

        : 

        (
          <button
            className={styles.buttonContainer_button}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(pinNote(note.id))
            }}
          >
            <PinIcon size={22} />
          </button>
        )

        }

        {note.Favorite ? 

        (
          <button
            className={styles.buttonContainer_button}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(unFavoriteNote(note.id))
            }}
          >
            <StarIcon size={22} color="#F4BE1A" />
          </button>
        ) 

        : 

        (

          <button
            className={styles.buttonContainer_button}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(favoriteNote(note.id))
            }}
          >
            <StarIcon size={22} />
          </button>
        )
        
        }

        <button
          className={styles.buttonContainer_button}
          onClick={(e) => {
            e.stopPropagation()
            dispatch(removeNotes(note.id))
          }}
        >
          <TrashIcon size={22} />
        </button>

      </div>

      <h5 className={styles.article_h}>
        {note.name}
      </h5>

      <p className={styles.p}>
        {note.text}
      </p>

    </article>
  )
}

export default NotePreview_UI