import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../assets/icon/hide.svg';
import maleImg from '../assets/images/male.png';
import '../index.css';
import { API_URL } from '../api';

interface FormData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

interface Errors {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
  message?: string;
}

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.firstname.trim()) newErrors.firstname = 'Ismingizni kiriting!';
    if (!formData.lastname.trim()) newErrors.lastname = 'Familiyangizni kiriting!';
    if (!formData.username.trim()) newErrors.username = 'Username kiriting!';
    if (!formData.email.trim()) {
      newErrors.email = 'Emailingizni kiriting!';
    } else if (!formData.email.includes('@gmail.com')) {
      newErrors.email = "Email noto'g'ri kiritildi!";
    }
    
    if (!formData.password.trim()) newErrors.password = 'Parol kiriting!';

    setError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });


      const data = await response.json();
      console.log(data);
      navigate('/login');
    } catch (error) {
      setError({ message: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex justify-center lg:justify-between items-center pt-[60px] px-[20px]"
    >
      <div className="flex flex-col gap-[60px] w-full max-w-[450px]">
        <div className="text-center">
          <h1 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[60px] text-[#252525] whitespace-nowrap">
            Ro‘yxatdan o‘tish
          </h1>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#4B4B4B]">
            Kerakli ma’lumotlarni kiritib ro‘yxatdan o‘ting
          </p>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[9px]">
              <span>Ismingiz</span>
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                type="text"
                className="w-full sm:w-[327px] h-[46px] border p-4 rounded-[8px] outline-none"
                placeholder="Ismingizni yozing"
              />
              {error.firstname && <p className="text-red-500 text-sm">{error.firstname}</p>}
            </div>

            <div className="flex flex-col gap-[9px]">
              <span>Familiyangiz</span>
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                type="text"
                className="w-full sm:w-[327px] h-[46px] border p-4 rounded-[8px] outline-none"
                placeholder="Familiyangizni yozing"
              />
              {error.lastname && <p className="text-red-500 text-sm">{error.lastname}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-[10px]">
              <div className="flex flex-col gap-[9px] w-full sm:w-[158px]">
                <span>Username</span>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  className="h-[46px] border p-4 rounded-[8px] outline-none"
                  placeholder="Username kiriting"
                />
                {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
              </div>

              <div className="flex flex-col gap-[9px] w-full sm:w-[158px]">
                <span>Email</span>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  className="h-[46px] border p-4 rounded-[8px] outline-none"
                  placeholder="Email kiriting"
                />
                {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-[9px]">
              <span>Parol</span>
              <div className="flex items-center border w-full sm:w-[327px] h-[46px] justify-between p-4 rounded-[8px]">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  className="outline-none w-full"
                  placeholder="Parolingizni kiriting"
                />
                <img src={hideIcon} alt="hide icon" className="w-[20px] h-[20px] ml-2" />
              </div>
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>

            {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="font-medium text-[14px] sm:text-[18px] border w-full sm:w-[327px] h-[46px] rounded-[8px] transition-colors duration-300 hover:bg-[#3C54C6] bg-[#607AFB] text-[#FFFFFF]"
          >
            {loading ? 'Yuborilmoqda...' : "Ro‘yxatdan o‘tish"}
          </button>
        </div>
      </div>

      <div className="w-[700px] hidden lg:flex">
        <img src={maleImg} alt="Registration Illustration" className="w-full h-auto" />
      </div>
    </form>
  );
}

export default Register;
