import { useEffect } from "react"
import { getToken, setToken } from "./utils"



const InitializedAuth = () => {
    useEffect(() => {
        const token: string | null = localStorage.getItem('jwt');
        if (token)
            setToken(token);
    }, [])
    return null;
}

export default InitializedAuth;