const BASE_URL = "http://localhost:3000";
export const API = async (endpoint, method = "GET", body = null, token = null) => {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: body ? JSON.stringify(body) : null,
        });

        return res.json();
    } catch (err) {
        console.log("API Error", err);
    }
};
