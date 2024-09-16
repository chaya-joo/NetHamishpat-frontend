import axios from '../utils/axios';


export const setToken = (token:string) => {
    localStorage.setItem('jwt', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const getToken = (): string | null => {
    const token = JSON.stringify(localStorage.getItem('jwt') || 'null');
    if(token!=null)
    {
        const jwtToken = parseToken(token);
        return jwtToken;
    }
    return token;
}

export const removeToken = () => {
    localStorage.removeItem('jwt')
    axios.defaults.headers.common.Authorization = undefined;
}

export const parseToken = (token:string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}

