import axios from "axios"

export const BASE_URL = "https://pokeapi.co/api/v2"

enum METHODS {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete"
}

function httpMethod<R, B>(method: METHODS, url: string, body?: B) {
    return axios.request<R>({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json;'
        },
        data: body ? JSON.stringify(body) : {}
    })
}

export function httpGet<R>(url: string) {
    return httpMethod<R, null>(METHODS.GET, url).then(res => res.data)
}
