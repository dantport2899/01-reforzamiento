import axios from "axios";

export const reqqResapi = axios.create({
    baseURL: 'https://reqres.in/api'
});