import axios from "axios";

export const $base_http = axios.create({
    baseURL: import.meta.env.VITE_API_PREFIX,
    headers: {'Content-Type': 'application/json'}
})