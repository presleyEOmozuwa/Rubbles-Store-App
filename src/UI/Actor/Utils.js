import axios from "axios"

export const getRequest = async (url) => {
    return axios.get(url);
}