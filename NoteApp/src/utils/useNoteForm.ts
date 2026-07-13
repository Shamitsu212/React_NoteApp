import { useEffect, useState } from 'react'

import type { Note } from '../store/slices/NotesSlice'

export function useNoteForm(currentNote?: Note) {

  const [name, setName] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (currentNote) {
      setName(currentNote.name)
      setText(currentNote.text)
    } 
    else {
      setName('')
      setText('')
    }
  }, [currentNote])

  return {name, text, setName, setText}
}