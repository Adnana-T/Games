import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'ef073e9a960f4db0befd1fab39175691'
    }
})