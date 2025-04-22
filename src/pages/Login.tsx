import { useState } from 'react';
import hideIcon from '../assets/icon/hide.svg';
import maleImg from '../assets/images/male.png';
import '../index.css';
import { API_URL } from '../api';

function Login() {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login yoki parol xato');
            }

            const { access, refresh } = await response.json();
            console.log('Access token:', access);
            console.log('Refresh token:', refresh);

            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            alert('Tizimga muvaffaqiyatli kirildi!');
        } catch (error: any) {
            setError(error.message || 'Server xatoligi mavjud!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container flex justify-center lg:justify-between items-center pt-[60px] px-[20px]">
            <div className="flex flex-col gap-[60px] w-full max-w-[450px]">
                <div className="text-center">
                    <h1 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[60px] text-[#252525] whitespace-nowrap">
                        Xush kelibsiz!
                    </h1>
                    <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#4B4B4B]">
                        Login parolingizni kiritib o‘z kabinetingizga kiring.
                    </p>
                </div>
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[9px]">
                            <span>Login</span>
                            <input
                                type="text"
                                name="username"
                                value={loginData.username}
                                onChange={handleChange}
                                className="w-full sm:w-[327px] h-[46px] border p-4 rounded-[8px] outline-none"
                                placeholder="Loginingizni kiriting"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            <span>Parol</span>
                            <div className="flex gap-[4px] items-center border w-full sm:w-[327px] h-[46px] justify-between p-4 rounded-[8px]">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    className="outline-none w-full"
                                    placeholder="Parolingizni kiriting"
                                />
                                <img
                                    src={hideIcon}
                                    alt="see svg image"
                                    className="cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="font-medium text-[14px] sm:text-[18px] border w-full sm:w-[327px] h-[46px] rounded-[8px] transition-colors duration-300 hover:bg-[#3C54C6] bg-[#607AFB] text-[#FFFFFF]"
                    >
                        {loading ? 'Kirish...' : 'Kirish'}
                    </button>
                </div>
            </div>
            <div className="w-[700px] hidden lg:flex">
                <img src={maleImg} alt="" />
            </div>
        </form>
    );
}

export default Login;
