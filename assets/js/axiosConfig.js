import axios from "axios";

const API_URL = "https://127.0.0.1:8000/api";

const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        Accept: "application/ld+json",
        "Content-Type": "application/json",
    },
});


instance.interceptors.request.use(
    (config) => {
        const bearerToken = localStorage.getItem("authBearerToken");

        if (bearerToken) {
            config.headers["Authorization"] = `Bearer ${bearerToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;