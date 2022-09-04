import axios from "axios";

const apiMeme = axios.create({
    baseURL: 'https://api.imgflip.com',
})

export default apiMeme
