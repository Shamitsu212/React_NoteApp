import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Folder{
    id: number,
    name: string
}

interface FoldersState{
    folders:Folder[]
}

const initialState:FoldersState = {
    folders: []
}

const ProjectSlice = createSlice({

    name: "Folders",

    initialState,

    reducers: {
        setProjects(state, action:PayloadAction<FoldersState>){
            state.folders = action.payload.folders
        },

        addProjects(state, action:PayloadAction<Folder>){
            state.folders.push(action.payload)
        },

        removeProject(state, action:PayloadAction<number>){
            state.folders = state.folders.filter((f) => f.id != action.payload)
        },

        changeProject(state, action:PayloadAction<Folder>){
            const find = state.folders.find((f) => f.id == action.payload.id)

            if(find){
                Object.assign(find, action.payload)
            }

        },
    }

})

export const { setProjects, addProjects, removeProject, changeProject } = ProjectSlice.actions
export default ProjectSlice.reducer