import axios from "axios";

const BASE_URL = "http://192.168.1.101:5000/api/"

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;


//console.log(localStorage.getItem("persist:root"))

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
});