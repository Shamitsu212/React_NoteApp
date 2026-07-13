import { configureStore } from "@reduxjs/toolkit";

import NotesSlice from "./slices/NotesSlice"
import FoldersSlice from './slices/FoldersSlice'


export const store = configureStore({
    reducer: {
        notes: NotesSlice,
        folders: FoldersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch