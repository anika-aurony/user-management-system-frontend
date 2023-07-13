import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUser, fetchUsers, postUser } from "./usersAPI";

const initialState ={
    users: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
    isError: false,
    error: "",
}

export const getUsers = createAsyncThunk("users/getUser", async () =>{
    const users = fetchUsers();
    return users;
})
export const addUser = createAsyncThunk("users/addUser", async (data) =>{
    const users = postUser(data);
    return users;
})
export const removeUser = createAsyncThunk("users/removeUser", async (id, thunkAPI) =>{
    const users = await deleteUser(id);
    thunkAPI.dispatch(removeFromList(id));
    return users;
})
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        togglePostSuccess: (state) =>{
            state.postSuccess= false;
        },
        toggleDeleteSuccess: (state) =>{
            state.deleteSuccess= false;
        },
        removeFromList : (state, action) => {
            state.users = state.users.filter(user => user._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state, action)=>{
            state.isLoading = true;
            state.isError = false
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.users = action.payload;
            state.isLoading = false;
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.users = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(addUser.pending, (state, )=>{
            state.isLoading = true;
            state.postSuccess = false;
            state.isError = false
        })
        .addCase(addUser.fulfilled, (state)=>{
            state.postSuccess = true
            state.isLoading = false;
        })
        .addCase(addUser.rejected, (state, action)=>{
            state.users = [];
            state.isLoading = false;
            state.postSuccess = false
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(removeUser.pending, (state, )=>{
            state.isLoading = true;
            state.deleteSuccess = false;
            state.isError = false
        })
        .addCase(removeUser.fulfilled, (state)=>{
            state.deleteSuccess = true
            state.isLoading = false;
        })
        .addCase(removeUser.rejected, (state, action)=>{
            state.users = [];
            state.isLoading = false;
            state.deleteSuccess = false
            state.isError = true;
            state.error = action.error.message;
        })

    }
});

export const {togglePostSuccess, toggleDeleteSuccess, removeFromList} = usersSlice.actions

export default usersSlice.reducer;