import hideIcon from '../assets/icon/hide.svg';
import maleImg from '../assets/images/male.png';
import '../index.css';

function InputRegister() {
  return (
    <div className="container flex justify-center lg:justify-between items-center pt-[60px] px-[20px]">
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
                type="text"
                className="w-full sm:w-[327px] h-[46px] border p-4 rounded-[8px] outline-none"
                placeholder="Ismingizni yozing"
              />
            </div>

            <div className="flex flex-col gap-[9px]">
              <span>Familiyangiz</span>
              <input
                type="text"
                className="w-full sm:w-[327px] h-[46px] border p-4 rounded-[8px] outline-none"
                placeholder="Familiyangizni yozing"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-[10px]">
              <div className="flex flex-col gap-[9px] w-full sm:w-[158px]">
                <span>Username</span>
                <input
                  type="text"
                  className="h-[46px] border p-4 rounded-[8px] outline-none"
                  placeholder="Username kiriting"
                />
              </div>
              <div className="flex flex-col gap-[9px] w-full sm:w-[158px]">
                <span>Email</span>
                <input
                  type="text"
                  className="h-[46px] border p-4 rounded-[8px] outline-none"
                  placeholder="Email kiriting"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[9px]">
              <span>Parol</span>
              <div className="flex items-center border w-full sm:w-[327px] h-[46px] justify-between p-4 rounded-[8px]">
                <input
                  type="password"
                  className="outline-none w-full"
                  placeholder="Parolingizni kiriting"
                />
                <img src={hideIcon} alt="hide icon" className="w-[20px] h-[20px] ml-2" />
              </div>
            </div>
          </div>

          <button className="font-medium text-[14px] sm:text-[18px] border w-full sm:w-[327px] h-[46px] rounded-[8px] transition-colors duration-300 hover:bg-[#3C54C6] bg-[#607AFB] text-[#FFFFFF]">
          Ro‘yxatdan o‘tish
          </button>
        </div>
      </div>

      <div className="w-[700px] hidden lg:flex">
        <img src={maleImg} alt="Registration Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default InputRegister;
