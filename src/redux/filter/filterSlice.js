import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filteredContacts:(state, action) =>{
            state.filter = action.payload
        },
    },
})
export const selectFilter = state => state.filter.filter;
export default filterSlice.reducer ;
export const {filteredContacts} = filterSlice.actions;