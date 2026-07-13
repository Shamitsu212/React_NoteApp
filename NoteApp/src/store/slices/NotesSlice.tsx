import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Note{

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

        pinNote(state, action:PayloadAction<number>){
            const find = state.notes.find((n) => n.id == action.payload)

            if(find){
                find.Pinned = true
            }

        },

        favoriteNote(state, action:PayloadAction<number>){
            const find = state.notes.find((n) => n.id == action.payload)

            if(find){
                find.Favorite = true
            }

        },

        unPinNote(state, action:PayloadAction<number>){
            const find = state.notes.find((n) => n.id == action.payload)

            if(find){
                find.Pinned = false
            }

        },

        unFavoriteNote(state, action:PayloadAction<number>){
            const find = state.notes.find((n) => n.id == action.payload)

            if(find){
                find.Favorite = false
            }

        },

        removeNotes(state, action:PayloadAction<number>){
            state.notes = state.notes.filter((n) => n.id != action.payload)
        },


        editNote(state, action: PayloadAction<Note>) {
          const note = state.notes.find(n => n.id === action.payload.id)
      
          if (note) {
            Object.assign(note, action.payload)
          }
        }
        
    }

})

export const { setNotes, addNote, removeNotes, editNote, pinNote, favoriteNote, unPinNote, unFavoriteNote } = NotesSlice.actions
export default NotesSlice.reducer