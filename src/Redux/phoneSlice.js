import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: ""
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        addPhone: (state, { payload }) => {
            state.contacts.push(payload)
        },
        delPhone: (state, { payload }) => {
            state.contacts = state.contacts.filter(el => el.id !== payload)
        },
        setFilter: (state, { payload }) => {
            state.filter = payload
        }
    }
})

export const { addPhone, delPhone, setFilter } = phoneSlice.actions;
export const phonebookReducer = phoneSlice.reducer