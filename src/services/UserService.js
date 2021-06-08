import axios from "axios";

const API_URL = "http://localhost:8080/";

class UserService {
    createUser(fullName) {
        return axios.post(API_URL + "crud/client/create", {fullName})
    }

    // Todo use pagination!
    //  send page and size in params
    getAllUsers() {
        return axios.get(API_URL + "crud/client/find-all")
    }
}

export default new UserService()