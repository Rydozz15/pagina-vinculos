import {
  HomeIcon,
  ExclamationCircleIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { menus } from "../lib/data";
import { NavbarContext } from "../context/NavbarContext";
export default function Characteristics() {
  const { setVisibleSection } = useContext(NavbarContext);
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
      }
    },
  });
  return (
    <article
      id={menus[1]}
      ref={ref}
      className="bg-logoLighter p-8 h-[1550px] md:h-full"
    >
      <div className="flex flex-col gap-4 items-center">
        {/*  Title */}
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h2 className="font-bold text-3xl text-secondary">
            Qué problemas podría tratar
          </h2>
          <p className="text-lg text-logo font-semibold">
            Las <span className="text-accent">constelaciones familiares</span>
            &nbsp; son una herramienta de terapia poderosa para comprender las
            dinámicas familiares, resolver conflictos internos y encontrar la
            paz interior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start p-4 gap-8 h-80 lg:h-[500px]">
          {/*  First Problem */}
          <div className="flex flex-col h-96 md:h-full gap-6 bg-url bg-[url('/servicios1-scaled.webp')] bg-cover bg-no-repeat justify-end">
            <div className="chat chat-start ml-[-1rem] mb-4">
              <div className="chat-bubble bg-base-300 flex flex-row gap-4">
                <div className="rounded-full p-2 bg-accent self-center ">
                  <HomeIcon className="w-8 h-8 text-base-200" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-logo">
                    Problemas familiares
                  </h3>
                  <p className="text-l text-base-content">
                    A nivel de pareja o familia extendida
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  Second Problem */}
          <div className="flex flex-col h-96 md:h-full gap-6 bg-url bg-[url('/servicios2-scaled.webp')] bg-cover bg-no-repeat justify-start">
            <div className="chat chat-end mr-[-1rem] mb-4">
              <div className="chat-bubble bg-base-300 flex flex-row gap-4">
                <div className="rounded-full p-2 bg-accent self-center ">
                  <ExclamationCircleIcon className="w-8 h-8 text-base-200" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-logo">
                    Problemas de salud física y mental
                  </h3>
                  <p className="text-l text-base-content">
                    Desde problemas de autoestima a enfermedades recurrentes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  Third Problem */}
          <div className="flex flex-col h-96 md:h-full gap-6 bg-url bg-[url('/servicios3-scaled.webp')] bg-cover bg-no-repeat justify-end">
            <div className="chat chat-end mr-[-1rem] mb-4">
              <div className="chat-bubble bg-base-300 flex flex-row gap-4">
                <div className="rounded-full p-2 bg-accent self-center ">
                  <ArrowTrendingDownIcon className="w-8 h-8 text-base-200" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-logo">
                    Problemas escolares y laborales
                  </h3>
                  <p className="text-l text-base-content">
                    Falta de concentración, estrés laboral o ansiedad escolar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
