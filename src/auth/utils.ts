import axios from '../utils/axios';


export const getToken = (): string | null => {
    const token = JSON.parse(localStorage.getItem('jwt') || 'null');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    return token;
}

export const removeToken = () => {
    localStorage.removeItem('jwt')
    axios.defaults.headers.common.Authorization = undefined;
}