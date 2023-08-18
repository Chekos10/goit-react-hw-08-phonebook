import { createAsyncThunk } from "@reduxjs/toolkit";
import { $instance } from "redux/authen/operations";

export const requestContactsThunk = createAsyncThunk(
    "contacts/getAll", 
    async(_, thunkApi)=>{
    try {
        const {data} = await $instance.get('/contacts');
        return data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);

    }
});

export const addContactThunk = createAsyncThunk(
    "contacts/addContact", 
    async(contactData, thunkApi)=>{
    try {
        const {data} = await $instance.post('/contacts',contactData);
        console.log(data)
        return data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);

    }
});
export const deleteContactThunk = createAsyncThunk(
    "contacts/deleteContact", 
    async(contactId, thunkApi)=>{
    try {
        const {data} = await $instance.delete(`/contacts/${contactId}`);
        console.log(data)
        return data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);

    }
});