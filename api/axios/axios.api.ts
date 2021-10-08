import axios from 'axios';

const axiosApi = (baseUrl: string) => {
    return axios.create({
        baseURL: baseUrl
    })
}

export {
    axiosApi
}