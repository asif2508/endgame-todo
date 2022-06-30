import axios from "axios";

export const taskApi = axios.create({
    baseURL: "http://localhost:5000",
})