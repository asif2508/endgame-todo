import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskApi } from "../../commons/ApiCall";

export const fetchedTasks =createAsyncThunk('tasks/fetchedTasks',  async ()=>{
    const response = await taskApi.get('/posts');
    return response.data;
}
)
const initialState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchedTasks.pending]: ()=>{
            console.log('movie is loading');
        },
        [fetchedTasks.fulfilled] : (state, {payload}) =>{
            console.log("successfully fetched");
            return {...state, tasks: payload};
        },
        [fetchedTasks.rejected]: ()=>{
            console.log("request rejected");
        }
    }
});

export const getAllTasks = state => state.tasks.tasks;
export default taskSlice.reducer;