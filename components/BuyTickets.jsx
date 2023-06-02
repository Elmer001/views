import React, { useState } from "react";
import Ticket from "../components/Ticket";
import { Link } from "react-router-dom";
import "../css/BuyTickets.css";

function Tickets() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className=" hbr peer"
          hidden
          aria-hidden="true"
        />
        <nav class="fixed z-20 w-full bg-[#E7E6E0] navbar shadow-2xl shadow-gray-600/5 border-b border-[#E7E6E0] peer-checked:navbar-active dark:shadow-none">
          <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
              <div class=" w-full items-center flex justify-between lg:w-auto">
                <a
                  class="flex items-center space-x-2 z-10"
                  href="#"
                  aria-label="logo"
                >
                  <img
                    className="object-contain w-full h-[3em]"
                    src="/images/ticket.png"
                    alt=""
                  />
                  <h1 className="text-[1.3em] text-[#264E52]">Boletomanía</h1>
                </a>
                <div className="flex items-center justify-between py-8">
                  <section className="MOBILE-MENU flex lg:hidden">
                    <div
                      className="HAMBURGER-ICON space-y-2"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <span className="block h-0.5 w-8 animate-pulse bg-[#264E52]"></span>
                      <span className="block h-0.5 w-8 animate-pulse bg-[#264E52]"></span>
                      <span className="block h-0.5 w-8 animate-pulse bg-[#264E52]"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                      <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                      >
                        <svg
                          className="h-8 w-8 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                      <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <Link to="/">Tickets</Link>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a href="">Mis tickets</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a href="">Escaner</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a href="">Grafica</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                          <a href="">Login</a>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a
                        href="#"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Tickets</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Mis tickets</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/QRCode"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Escaner</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Grafica</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="w-full space-y-2 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 border border-black rounded-2xl before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    to="/"
                  >
                    <span class="relative text-sm text-gray-900">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="pt-40 lg:pt-44 h-screen bg-white">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <Ticket />
            </div>
            <div>
              <Ticket />
            </div>
            <div>
              <Ticket />
            </div>
            <div>
              <Ticket />
            </div>
            <div>
              <Ticket />
            </div>
            <div>
              <Ticket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
