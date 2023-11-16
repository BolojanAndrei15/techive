import React from "react";

function Contact() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Hai să Facem Lucruri Mari Împreună!
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Sunteți gata să transformăm ideile în realitate? Echipa noastră
              este entuziasmată să înceapă lucrul la proiectul tău și să creeze
              ceva extraordinar împreună!
            </p>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Adresă de email{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="ex: mihailcordovan@gmail.com"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Număr de telefon{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder="ex: 0771 123 456"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
                      Nume și prenume
                    </label>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="ex: Cordovan Mihai"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
                      Mesajul Tău
                    </label>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      type="text"
                      name=""
                      id=""
                      placeholder="ex: Doresc o fertă pentru....."
                      className="h-48 resize-y min-h-48 max-h-48 block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Trimite
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <img
              className="w-full mx-auto h-[25rem] md:h-[60rem]"
              src="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
