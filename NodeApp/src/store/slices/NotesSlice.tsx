import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Note{

    id: number,
    project_id: number,

    name: string,
    text: string,

    Pinned: boolean,
    Favorite: boolean
}

interface NotesState{
    notes:Note[]
}

const initialState:NotesState = {
    notes: []
}

const NotesSlice = createSlice({

    name: "Notes",

    initialState,

    reducers: {
        setNotes(state, action:PayloadAction<NotesState>){
            state.notes = action.payload.notes
        },

        addNote(state, action:PayloadAction<Note>){
            state.notes.push(action.payload)
        },

        pinNote(){},
        removeNotes(){},


        editNote(state, action: PayloadAction<Note>) {
          const note = state.notes.find(n => n.id === action.payload.id)
      
          if (note) {
            Object.assign(note, action.payload)
          }
        }
        
    }

})

export const { setNotes, addNote, removeNotes, editNote,  } = NotesSlice.actions
export default NotesSlice.reducer