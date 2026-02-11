import { apiFetch } from "./api";

let accessToken: string | null = null;

export function setAccessToken(token: string) {
    accessToken = token;
}

export function getAccessToken() {
    return accessToken;
}

export async function login(username: string, password: string) {
    const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });

    setAccessToken(data.data.accessToken);
}

export async function register(username: string, password: string) {
    await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
}

export async function logout() {
    await apiFetch("/api/auth/logout", {
        method: "POST",
    });

    accessToken = null;
}