export const API = async (endpoint, method = "GET", body = null, token = null) => {

    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: body ? JSON.stringify(body) : null,
        });
        const json = await res.json()
        return {
            status: res.status,
            ...json

        };
    } catch (err) {
        console.log("API Error", err);
    }
};
