import React from "react";

function WorkProcces() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Procesul nostru de colaborare
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Ascultăm atent, conturăm o strategie solidă și lucrăm în tandem
            pentru a dezvolta și livra produse software care schimbă jocul. Este
            povestea noastră să transformăm viziunile în realitate și să creăm
            împreună viitorul digital
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-fuchsia-100 border-2 border-fuchsia-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Consultanță Inițială
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Începem prin înțelegerea profundă a nevoilor și obiectivelor
                tale. Programăm o întâlnire pentru a discuta proiectul tău și
                pentru a identifica soluțiile potrivite
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-100 border-2 border-purple-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Brainstorming și Planificare:
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Echipa noastră de specialiști se adună pentru a contura o
                strategie personalizată. Generăm idei și stabilim un plan
                detaliat, asigurându-ne că fiecare aspect este acoperit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-violet-100 border-2 border-violet-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Dezvoltare și Iterație
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Intrăm în etapa de dezvoltare a soluției software. Lucrăm
                împreună, păstrându-te mereu la curent cu progresele și
                solicitându-ți feedback-ul în fiecare etapă
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 border-2 border-indigo-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 4 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Testare și Perfecționare
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Calitatea este prioritatea noastră. Testăm riguros produsul
                pentru a ne asigura că răspunde tuturor cerințelor. Iterăm și
                perfecționăm pentru a atinge excelența.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 border-2 border-blue-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 5 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Livrare și Suport Continuu
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Produsul final este livrat, iar colaborarea noastră nu se
                oprește aici. Oferim suport și întreținere pentru a ne asigura
                că soluția rămâne optimă și actualizată
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-sky-100 border-2 border-sky-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 6 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Feedback și Evoluție
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Ne dorim mereu să învățăm și să ne îmbunătățim. Așteptăm cu
                nerăbdare feedback-ul tău pentru a continua să evoluăm și să
                oferim soluții mai bune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcces;
