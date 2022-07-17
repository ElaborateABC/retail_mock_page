import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducer'

export const store = configureStore({
    reducer: {
        json: dataReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
