import { API_URL } from ".."
import { removeTokens, setTokens } from './../config/tokenConfig';

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/token/`,
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username, password: password}),
            }
        )
        if(!response.ok){
            throw new Error('Login Failed')
        }

        const data = await response.json()
        setTokens(data.access, data.refresh)

    } catch (error) {
        throw new Error ((error as Error).message || 'Something went wrong')
    }
}  


export const register = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/token/`,
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username, password: password}),
            }
        )
        if(!response.ok){
            throw new Error('Login Failed')
        }

        const data = await response.json()
        setTokens(data.access, data.refresh)

    } catch (error) {
        throw new Error ((error as Error).message || 'Something went wrong')
    }
}  

export const logout = (): void => {
    removeTokens()
}