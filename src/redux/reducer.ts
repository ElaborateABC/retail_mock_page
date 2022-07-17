import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.json'
import { RootState } from './store'

interface dataState {
    value: any[]
}

const initialState: dataState = {
    value: [],
}

export const dataSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        createData: (state, action) => {
            state.value = []
            data.every((item) => {
                state.value.push(item)
            })
        },
    },
})

export const { createData } = dataSlice.actions

export const getData = (state: RootState) => state.json

export default dataSlice.reducer
