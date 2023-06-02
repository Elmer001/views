import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-auto max-w-screen-2xl min-h-screen lg:relative bg-gradient-to-b lg:bg-gradient-to-r from-[#87cbb9] to-[#ffffff]">
        <div className="flex flex-1 flex-col my-8 lg:my-0 lg:h-screen lg:max-w-screen-sm justify-center">
          <div className="flex flex-col 2xl:ml-0 lg:ml-6 xl:ml-0 lg:w-2/4 xl:w-3/4 2xl:w-full ">
            <h1 className="text-[1.8em] text-3xl 2xl:pl-0 xl:pl-28 lg:pt-8 lg:pb-8 2xl:text-center text-black font-extrabold text-center 2xl:w-full xl:text-start">
              Boletomania
            </h1>
            <p className="text-[1em] lg:mt-12 2xl:mt-0 text-black 2xl:pl-0 2xl:text-center px-6 lg:px-0 xl:text-start xl:pl-5">
              Cumple tus sueños de poder asistir a los mejores conciertos de El
              Salvador
            </p>
          </div>

          <img
            className="object-contain hidden lg:block object-left lg:h-[60%] 2xl:h-auto opacity-0 lg:opacity-100 lg:static"
            src="/images/fondo.png"
            alt="image"
          />
        </div>

        <div className="flex flex-1 flex-row lg:items-end 2xl:items-center justify-end lg:w-8/12 2xl:h-screen lg:h-screen 2xl:h-[550px] 2xl:static lg:absolute lg:bottom-0 lg:right-0 lg:z-10">
          <div className="min-w-full lg:p-0 p-5 transparent-box items-center lg:bg-white flex flex-1 flex-col lg:w-4/6 w-screen h-5/6 2xl:h-[550px] justify-center lg:justify-center space-y-5 rounded-3xl ">
            <div className="flex flex-col max-w-xl lg:px-[15%] lg:pt-[8%] lg:pb-[0%] lg:max-w-full lg:max-h-full space-y-5 lg:space-y-10 w-full">
              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-none bg-transparent outline-none focus:outline-none text-black text-base lg:text-[0.6em]"
                />
              </div>

              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border-none bg-transparent outline-none focus:outline-none text-black text-base lg:text-[0.6em]"
                />
              </div>

              <button className="flex items-center justify-center flex-none lg:px-4 lg:py-2 lg:mx-20 mx-[10%] rounded-lg font-medium text-white bg-[#FFB621] text-md lg:text-[0.8em] font-black">
                Login
              </button>
              <button className="flex text-white items-center justify-center flex-none md:px-4 md:py-2 lg:mx-20 mx-[10%] rounded-lg font-medium relative bg-[#FFB621] text-md lg:text-[0.8em] font-black">
                <span>Login with google</span>
                <span className="absolute right-4 lg:right-16">
                  <svg
                    className="w-5 h-6 lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#EA4335 "
                      d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                    />
                  </svg>
                </span>
              </button>
            </div> 
            <div class="w-full text-left text-center lg:text-start align-center text-lg lg:text-[0.8em]">
              <Link className="lg:pl-16 text-[#00A4F9]" to="/password">Establecer contraseña</Link>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
