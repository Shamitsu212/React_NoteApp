import { useDispatch } from 'react-redux'

import { addProjects } from '../store/slices/FoldersSlice'
import { createFolder } from '../utils/createFolder'

export function useCreateFolder() {
  const dispatch = useDispatch()

  return (name: string) => {dispatch(addProjects(createFolder(name)))}
}