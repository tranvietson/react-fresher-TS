import axios from "services/axios.customize";

export const loginAPI = (username: string, password: string) => {
    const urlBackend = "/api/v1/auth/login";
    return axios.post<IBackendRes<ILogin>>(urlBackend, { username, password })
}

export const RegisterAPI = (fullName: string, email: string, password: string, phone: number) => {
    const urlBackend = "/api/v1/user/register";
    return axios.post<IBackendRes<IRegister>>(urlBackend, { fullName, email, password, phone })
}

export const FetchAccountAPI = () => {
    const urlBackend = "/api/v1/auth/account";
    return axios.get<IBackendRes<IFetchData>>(urlBackend, {
        headers: {
            delay: 1000
        }
    })
}

export const logoutAPI = () => {
    const urlBackend = "/api/v1/auth/logout";
    return axios.post<IBackendRes<ILogin>>(urlBackend)
}

// export const getUsersAPI = (current: number, pageSize: number) => {
//     const urlBackend = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
//     return axios.get<IBackendRes<IModelPaginate<IUserTable>>>(urlBackend)
// }

export const getUsersAPI = (query: string) => {
    const urlBackend = `/api/v1/user?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IUserTable>>>(urlBackend)
}

export const createUserAPI = (fullName: string, email: string,
    password: string, phone: string) => {
    const urlBackend = "/api/v1/user";
    return axios.post<IBackendRes<IRegister>>(urlBackend,
        { fullName, email, password, phone })
}



