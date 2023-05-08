import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '4e039ed428a44ad69b4914613bf9ee54'
    }
})