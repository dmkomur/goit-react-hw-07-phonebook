import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://647de041af984710854a84d8.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const delContactThunk = createAsyncThunk(
  'contact/dell',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
		condition: (_, thunkAPI) => {
      const loading = thunkAPI.getState().contacts.isLoading;
			if (loading) {
				return false
			}
		}
	}
)