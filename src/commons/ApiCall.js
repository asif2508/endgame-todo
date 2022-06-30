import axios from "axios";

export const taskApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})