import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, requestContactsThunk } from "./contactsOperations";


const initialState = {
    contacts: null,
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder =>
        builder
        .addCase(requestContactsThunk.pending, (state) =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(requestContactsThunk.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.contacts = action.payload;
        })
        .addCase(requestContactsThunk.rejected, (state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        })
        //addContact//
        .addCase(addContactThunk.pending, (state) =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addContactThunk.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.contacts.push(action.payload)
        })
        .addCase(addContactThunk.rejected, (state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        })
        //deleteContact//
        .addCase(deleteContactThunk.pending, (state) =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteContactThunk.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload.id
            )
        })
        .addCase(deleteContactThunk.rejected, (state,action) =>{
            state.isLoading = false;
            state.error = action.payload;
        })
})

export const contactsReducer = contactSlice.reducer;