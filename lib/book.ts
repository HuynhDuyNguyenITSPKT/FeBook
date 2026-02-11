import { apiFetch } from "@/lib/api";


export async function getall(){
    const data = await apiFetch("/api/comics/all", {
        method: "GET",
    });
    return data.data;
}