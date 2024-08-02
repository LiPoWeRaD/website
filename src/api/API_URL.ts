import axios from "axios";

const API_URL = "https://cinemaguide.skillbox.cc/"

const API = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default API