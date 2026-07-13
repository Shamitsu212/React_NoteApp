import styles from './Aside_Notes.module.css'

import Button_UI from '../../../UI/Button_UI/Button_UI'
import NotePreview_UI from '../../../UI/NotePreview_UI/NotePreview_UI'
import { PlusCircleIcon } from 'lucide-react'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../store/store'
import { addNote } from '../../../../store/slices/NotesSlice'

import { useRequiredContext } from '../../../../utils/useRequiredContext'
import { SelectedFolderContext } from '../../../../context/SelectedFolderContext'
import { SearchContext } from '../../../../context/SearchContext'

import { useFilteredNotes } from '../../../../utils/useFilteredNotes'
import { createEmptyNote } from '../../../../utils/createEmptyNote'

function Aside_Notes() {

  const { selected } = useRequiredContext(SelectedFolderContext, 'SelectedFolderContext')
  const { search } = useRequiredContext(SearchContext, 'SearchContext')

  const { filteredNotes, pinnedNotes } = useFilteredNotes(selected, search)

  const dispatch = useDispatch()

  function createNote() {
    dispatch(addNote(createEmptyNote(selected)))
  }

  const folders = useSelector((state: RootState) => state.folders)
  const folder = folders.folders.find((f) => f.id == Number(selected))

  const title = selected === 'All'
      ? 'Все заметки'
      : selected === 'favorite'
      ? 'Избранные'
      : folder?.name ?? 'Папка'

  return (

    <div className={styles.aside_notes}>

      {pinnedNotes.length > 0 && (
        <div>

          <h2 className={styles.aside_h}>Закрепленные</h2>

          <div className={styles.notes_list}>

            {pinnedNotes.map((n) => (
              <NotePreview_UI
                key={n.id}
                id={n.id}
              />
            ))}

          </div>

        </div>
      )}

      {filteredNotes.length > 0 && (
        <div>

          <h2 className={styles.aside_h}>
            {title}
          </h2>

          <div className={styles.notes_list}>

            {filteredNotes.map((n) => (
              <NotePreview_UI
                key={n.id}
                id={n.id}
              />
            ))}

          </div>

        </div>
      )}

      <div className={`${selected == "favorite" ? styles.none : styles.aside_addButton}`}>

        <PlusCircleIcon />

        <Button_UI
          text="Новая запись"
          OnClick={createNote}
          result="Новая запись"
        />

      </div>

    </div>

  )
}

export default Aside_Notes