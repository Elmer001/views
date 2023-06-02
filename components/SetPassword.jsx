import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-auto max-w-screen-2xl min-h-screen lg:relative bg-gradient-to-b lg:bg-gradient-to-r from-[#87cbb9] to-[#ffffff]">
        <div className="flex flex-1 flex-col my-0 lg:my-0 lg:h-screen lg:max-w-screen-sm justify-center">
          <div className="flex flex-col 2xl:ml-0 lg:ml-6 xl:ml-0 lg:w-2/4 xl:w-3/4 2xl:w-full ">
            <h1 className="text-[1.8em] text-3xl 2xl:pl-0 xl:pl-28 lg:pt-8 lg:pb-8 2xl:text-center text-black font-extrabold text-center 2xl:w-full xl:text-start">
              Boletomania
            </h1>
            <p className="text-[1em] invisible lg:mt-12 2xl:mt-0 text-black 2xl:pl-0 2xl:text-center px-6 lg:px-0 xl:text-start xl:pl-5">
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
            <div className="flex flex-col max-w-xl lg:px-[15%] lg:pt-[8%] lg:pb-[0%] lg:max-w-full lg:max-h-full space-y-10 lg:space-y-9 w-full">
              <p className="text-[0.8em] 2xl:mt-0 text-black 2xl:pl-0 text-center px-6 lg:px-0 xl:pl-5">
                Establecer contraseña
              </p>

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

              <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  className="w-full border-none bg-transparent outline-none focus:outline-none text-black text-base lg:text-[0.6em]"
                />
              </div>
              <Link
                className="flex items-center justify-center flex-none lg:px-4 py-2.5 lg:py-2 lg:mx-20 mx-[10%] rounded-lg font-medium text-white bg-[#FFB621] text-md lg:text-[0.8em] font-black"
                to="/"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
