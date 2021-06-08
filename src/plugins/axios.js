import axios from 'axios';

const baseConfig = {
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: 'Bearer {token}'
    }
}

export const axiosInstance = axios.create(baseConfig);