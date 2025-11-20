import axios from "axios";

const JWT_URL = window.JWT_URL;

export async function fetchToken() {
    try {
        const response = await axios.post(
            `${JWT_URL}/token/get`,
            {},
            {
                withCredentials: true,
            }
        );
        const bearerToken = response.data.token;
        localStorage.setItem("authBearerToken", bearerToken);
        return bearerToken;
    } catch (error) {
        console.error("Error when get token:", error);
        throw error;
    }
}