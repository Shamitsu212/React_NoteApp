import styles from './AddNote.module.css'

import Input_UI from '../../UI/Input_UI/Input_UI'
import TextArea_UI from '../../UI/TextArea_UI/TextArea_UI'

import { SelectedNoteContext } from '../../../context/SelectedNoteContext'
import { useRequiredContext } from '../../../utils/useRequiredContext'

import { useCurrentNote } from '../../../utils/useCurrentNote'
import { useAutosaveNote } from '../../../utils/useAutosaveNote'
import { useNoteForm } from '../../../utils/useNoteForm'

function AddNote() {

  const { selected } = useRequiredContext(SelectedNoteContext, 'SelectedNoteContext')
  const currentNote = useCurrentNote(selected)
  const disabled = !currentNote

  const {name, text, setName, setText,} = useNoteForm(currentNote)
  useAutosaveNote(currentNote, name, text)

  return (
    <form className={styles.form}>

      <Input_UI
        string={name}
        setString={setName}
        placeholder="Название записи"
        isNote="y"
        disabled={disabled}
      />

      <TextArea_UI
        string={text}
        setString={setText}
        placeholder="Текст записи"
        disabled={disabled}
      />

    </form>
  )
}

export default AddNote