import styles from './Aside_Notes.module.css'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../store/store'
import Button_UI from '../../../UI/Button_UI/Button_UI'
import NotePreview_UI from '../../../UI/NotePreview_UI/NotePreview_UI'
import { useContext } from 'react'
import { SelectedFolderContext } from '../../../../context/SelectedFolderContext'
import { SearchContext } from '../../../../context/SearchContext'
import { PlusCircleIcon } from 'lucide-react'
import { addNote } from '../../../../store/slices/NotesSlice'

function Aside_Notes() {

    const notes = useSelector((state: RootState) => state.notes)

    const contextSelectedFolder = useContext(SelectedFolderContext)
    if(!contextSelectedFolder){
      throw new Error("")
    }
    const  { selected } = contextSelectedFolder

    const contextSearch = useContext(SearchContext)
    if(!contextSearch){
      throw new Error("")
    }
    const  { search } = contextSearch


    const filteredByFolder = selected === "All"
      ? notes.notes
      : selected === "favorite"
      ? notes.notes.filter(n => n.Favorite)
      : notes.notes.filter(n => n.project_id === Number(selected))

    const sortedArr = search.trim().length > 0
      ? filteredByFolder.filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
      : filteredByFolder

    const pinnedNotes = notes.notes.filter((n) => n.Pinned == true)

    
    const dispatch = useDispatch()

    function createNote() {

    const newNote = {
      id: Date.now(),
      project_id:
        selected !== "All" &&
        selected !== "favorite"
          ? Number(selected)
          : 0,

      name: "Новая заметка",
      text: "",

      Pinned: false,
      Favorite: false
    }

    dispatch(addNote(newNote))
  }

  return (
    <div className={styles.aside_notes}>
    
    
    {pinnedNotes.length > 0 && (
    <div>
      <h2>Закрепленные</h2>

      <div className={styles.notes_list}>

        {pinnedNotes.map((n) => (
            <NotePreview_UI id={n.id} />
        ))}

      </div>
    </div>
    )}

    {sortedArr.length > 0 && (
    <div>
      <h2>Записи</h2>

      <div className={styles.notes_list}>

        {sortedArr.map((n) => (
            <NotePreview_UI id={n.id} />
        ))}

      </div>
    </div>
    )}
      
        
      

      <div>
          <PlusCircleIcon/>
          <Button_UI text='Добавить новую запись' OnClick={createNote} result='Новая запись'/>
        </div>

    </div>
  )
}

export default Aside_Notes