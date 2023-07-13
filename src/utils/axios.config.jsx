import axios from "axios";

const instance = axios.create({
    baseURL: "https://user-management-system-assignment-backend.vercel.app"
})

export default instance;