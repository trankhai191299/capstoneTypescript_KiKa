import { configureStore,PayloadAction } from '@reduxjs/toolkit'
import subjectReducer from './reducers/subjectReducer'
import userReducer from './reducers/userReducer'
export const store = configureStore({
  reducer: {
    userReducer:userReducer,
    subjectReducer:subjectReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch