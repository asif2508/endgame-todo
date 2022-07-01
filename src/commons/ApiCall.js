import axios from "axios";

export const taskApi = axios.create({
    baseURL: "https://aqueous-citadel-11799.herokuapp.com",
})