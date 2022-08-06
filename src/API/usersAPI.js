import axios from "axios";


export const UsersAPI = {
    getUsers() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>res.data)
},
}

