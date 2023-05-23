import { configureStore, createSlice } from '@reduxjs/toolkit';
import {toggleLesson} from "./actions";


const INITIAL_STATE = {
    activeLessons: {},
    activeModules: {},
    modules: [
    {
        id: 1,
        title: "Iniciando com React",
        lessons: [
            {id: 1, title: "Primeira aula"},
            {id: 2, title: "Segunda aula"}
        ]
    },
    {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
            {id: 1, title: "Terceira aula"},
            {id: 2, title: "Quarta aula"}
        ]
    }
]
}

const courses = createSlice({
    name: "courses",
    initialState: INITIAL_STATE,
    reducers:{
        toogleLesson: (state, action)=>{
            if (action === 'courses/toogleLesson'){
                return {...state, activeLessons: action.activeLessons, activeModules: action.activeModules};
            }
        }
    }
});

const store = configureStore({
    reducer: courses.reducer
});

export default store;