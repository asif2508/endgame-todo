import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskApi } from "../../commons/ApiCall";

export const fetchedTasks = createAsyncThunk('tasks/fetchedTasks', async () => {
    const response = await taskApi.get('/task');
    return response.data;
});

export const completeTaskFetch = createAsyncThunk('/tasks/completeTaskFetch', async () =>{
    const response = await taskApi.get('/completetask');
    return response.data;
})

export const addTask = createAsyncThunk('tasks/addTask', async (data) => {
    const response = await taskApi.post('/task', data);
    return response.data;
})

export const completeTask = createAsyncThunk('tasks/completeTask', async (id) => {
    const response = await taskApi.patch(`/task/${id}`, { completed: true });
    return response.data;
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id)=>{
    const response = await taskApi.delete(`/task/${id}`);
    return response.data;
}) 

const initialState = {
    tasks: [],
    completeTasks:[],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchedTasks.pending]: () => {
            console.log('movie is loading');
        },
        [fetchedTasks.fulfilled]: (state, { payload }) => {
            console.log("successfully fetched");
            return { ...state, tasks: payload };
        },
        [addTask.fulfilled]: () => {
            console.log("task fulfilled");
        },
        [completeTask.fulfilled]: () => {
            console.log('successfully completed');
        },
        [completeTaskFetch.fulfilled]: (state, {payload}) =>{
            console.log('complete fetched successfully');
            return {...state, completeTasks: payload};
        },
        [deleteTask.fulfilled]: () => {
            console.log('successfully completed');
        },
        [fetchedTasks.rejected]: () => {
            console.log("request rejected");
        }
    }
});

export const getAllTasks = state => state.tasks.tasks;
export const getAllCompleteTasks = state => state.tasks.completeTasks;
export default taskSlice.reducer;