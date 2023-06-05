import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, addContactThunk, delContactThunk } from "./phoneOperations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filter = payload
        }
    },
    extraReducers: builder => { builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
 

      }).addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
 

      }).addCase(delContactThunk.fulfilled, (state, action) => {
        const contactId = state.contacts.items.findIndex(item => item.id === action.payload);
        state.contacts.items.splice(contactId, 1);     


      }).addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;

				}
			)
			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state) => {
					state.contacts.isLoading = true;
          state.contacts.error = null;
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.contacts.error = action.payload;
                  state.contacts.isLoading = false;
				})
  }
    
})




export const { addPhone, setFilter, delPhone } = phoneSlice.actions;
export const ponebookReducer = phoneSlice.reducer;

// .addMatcher(
// 				action => action.type.endsWith('/fulfilled'),
// 				(state, action) => {
// 					state.loading = false
// 				}
// 			)
// 			.addMatcher(
// 				action => action.type.endsWith('/pending'),
// 				(state, action) => {
// 					state.loading = true
// 					state.error = ''
// 				}
// 			)
// 			.addMatcher(
// 				action => action.type.endsWith('/rejected'),
// 				(state, action) => {
// 					state.error = action.payload
// 					state.loading = false
// 				}