import { useState } from "react"
import { login } from "../api/services/authService"
import Input from "../components/InputLogin"

function Login() {

    const [username] = useState('xudoyberdiyev')
    const [password] = useState('12345678')

    login(username, password)



    return (
        <div>
            <Input/>
        </div>
    )
}

export default Login
