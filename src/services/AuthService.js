import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {

    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                alert("Get response")
                if (response.data.accessToken) {
                    alert("Response is OK")
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, fullName, password, secretPhrase) {
        return axios.post(API_URL + "auth/register", {
            username,
            fullName,
            password,
            secretPhrase
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();