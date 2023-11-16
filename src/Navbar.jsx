import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header class=" bg-white z-50 lg:pb-0 sticky top-0 border-b-2  border-slate-50">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0 flex ">
            <a href="#" title="" className="flex justify-center items-center">
              <img
                class="w-auto h-14 lg:h-20"
                src="https://cdn.discordapp.com/attachments/382552813504561152/1174770002570792990/logo_hive_tech.png?ex=6568ccd2&is=655657d2&hm=0611a44107c3d7e10238156391e2133a8cf1e56634c986e39d1bb156289173a5&"
                alt=""
              />
              <h1 className="font-bold text-2xl text-slate-900">
                Tec<span className="text-slate-900">Hive</span>
              </h1>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              class="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              title=""
              class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Acasă{" "}
            </a>

            <a
              href="#"
              title=""
              class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              {" "}
              Servicii{" "}
            </a>

            <a
              href="#"
              title=""
              class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Proiecte
            </a>

            <a
              href="#"
              title=""
              class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Despre
            </a>
          </div>

          <a
            href="#"
            title=""
            class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            {" "}
            Începe Colaborarea{" "}
          </a>
        </nav>

        <nav
          class={`${
            isOpen ? "flex flex-col" : "hidden"
          } pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden`}
        >
          <div class="flow-root">
            <div class="flex flex-col px-6 my-2 space-y-1">
              <a
                href="#"
                title=""
                class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Acasă{" "}
              </a>

              <a
                href="#"
                title=""
                class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Servicii{" "}
              </a>

              <a
                href="#"
                title=""
                class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Proiecte{" "}
              </a>

              <a
                href="#"
                title=""
                class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Despre{" "}
              </a>
            </div>
          </div>

          <div class="px-6 mt-6">
            <a
              href="#"
              title=""
              class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Începe Colaborarea{" "}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
