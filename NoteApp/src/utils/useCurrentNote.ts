import { useSelector } from 'react-redux'

import type { RootState } from '../store/store'

export function useCurrentNote(selected: string | number) {
  return useSelector((state: RootState) => state.notes.notes.find((n) => n.id === Number(selected)))
}