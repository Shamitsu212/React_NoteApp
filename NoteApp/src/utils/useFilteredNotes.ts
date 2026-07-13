import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export function useFilteredNotes(selected: string, search: string) {

  const notes = useSelector(
    (state: RootState) => state.notes.notes
  )

  const filteredByFolder = selected === 'All'
      ? notes
      : selected === 'favorite'
      ? notes.filter((n) => n.Favorite)
      : notes.filter((n) => n.project_id === Number(selected))

  const filteredNotes = search.trim().length > 0
      ? filteredByFolder.filter((n) => n.name.toLowerCase().includes(search.toLowerCase()))
      : filteredByFolder

  const pinnedNotes = notes.filter((n) => n.Pinned)

  return {filteredNotes, pinnedNotes,}
}