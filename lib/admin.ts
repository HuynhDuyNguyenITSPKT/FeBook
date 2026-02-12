import {apiFetch} from "@/lib/api";

export async function getUserInfo() {
    const data = await apiFetch("/api/admin/users/all", {
        method: "GET",
    });
    return data.data.users;
}

export async function createcomics(title: string, author: string, description: string, coverImageUrl: string) {
    const data = await apiFetch("/api/admin/comics/create", {
        method: "POST",
        body: JSON.stringify({ title, author, description, coverImageUrl }),
    });
    return data.data;
}
