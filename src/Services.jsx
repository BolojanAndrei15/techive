import React from "react";
import { SiWebtoon } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdUpgrade } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { MdOutlineVideoCameraBack } from "react-icons/md";

const Services = () => {
  return (
    <section className="pb-12 pt-20 bg-indigo-50 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Servicile Noastre
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Transformăm Viziunile în Realitate Digitală
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                De la crearea de aplicații inovatoare la optimizarea produselor
                existente și consultanță în transformarea digitală, suntem aici
                pentru a-ți oferi experiența completă
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Web Development"
            details="Portofoliul nostru de servicii web include crearea de site-uri de prezentare remarcabile, aplicații web personalizate adaptate nevoilor tale și magazine online scalabile. Indiferent de cerințele tale, suntem aici pentru a transforma conceptele tale într-o experiență digitală ."
            icon={<SiWebtoon className="h-20 w-20 text-blue-500" />}
          />
          <ServiceCard
            title="Mobile Development"
            details="Expertiza noastră în dezvoltarea aplicațiilor mobile îți oferă acces la soluții software inovatoare și adaptate dispozitivelor mobile. Creăm aplicații mobile pentru diverse platforme, asigurându-ne că afacerea ta este la îndemâna utilizatorilor din întreaga lume."
            icon={<TbDeviceMobileCode className="h-20 w-20 text-violet-500" />}
          />
          <ServiceCard
            title="Social Media Marketing"
            details="Creează o prezență puternică și autentică pe platformele de socializare cu ajutorul serviciilor noastre de marketing. Strategiile noastre experte în social media te vor ajuta să-ți extinzi audiența, să creezi conținut relevant și să crești angajamentul cu clienții."
            icon={<TiSocialAtCircular className="h-20 w-20 text-indigo-500" />}
          />
          <ServiceCard
            title="Digital Upgrade"
            details="Oferim consultanță cuprinzătoare în transformarea digitală a afacerii tale. Echipa noastră de experți te va ghida în adoptarea tehnologiilor de vârf și în implementarea strategiilor digitale pentru a-ți crește eficiența și performanța în mediul online"
            icon={<MdUpgrade className="h-20 w-20 text-sky-500" />}
          />
          <ServiceCard
            title="Graphic Design"
            details="De la designul de brand și promovare până la ilustrații personalizate și animații grafice, investim pasiune și talent în fiecare proiect. Indiferent dacă ai nevoie de un logo distinctiv, materiale promoționale atrăgătoare sau conținut vizual care să reflecte esența și mesajul tău"
            icon={<CgIfDesign className="h-20 w-20 text-blue-500" />}
          />
          <ServiceCard
            title=" Conținut Multimedia"
            details="De la conținutul multimedia captivant și prezentări interactive până la materiale educaționale și video-uri promoționale, oferim creație de conținut multimedia care să impresioneze și să angajeze audiența ta pentru un scale-up care să aducă profit garantat"
            icon={
              <MdOutlineVideoCameraBack className="w-20 h-20 text-indigo-500" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
