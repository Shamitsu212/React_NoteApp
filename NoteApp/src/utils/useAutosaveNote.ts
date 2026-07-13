import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { editNote } from '../store/slices/NotesSlice'
import type { Note } from '../store/slices/NotesSlice'

export function useAutosaveNote(currentNote: Note | undefined, name: string, text: string) {
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
}