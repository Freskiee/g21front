
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tareaService from "./tareaService";

const initialState = {
    tareas: [],
    iseError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}

// crear una tarea
export const crearTarea = createAsyncThunk('tareas/crear', async (tareaData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await tareaService.crearTarea(tareaData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const tareaSlice = createSlice({
    name: 'tarea',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearTarea.pending, (state) => {
                state.isLoading = true
            })
            .addCase(crearTarea.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSucces = true
                state.tareas.push(action.payload)
            })
            .addCase(crearTarea.rejected, (state, action) => {
                state.isLoading = false
                state.iseError = true
                state.message = action.payload
            })
    }
})

export const { reset } = tareaSlice.actions
export default tareaSlice.reducer