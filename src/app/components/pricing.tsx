import { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { menus } from "../lib/data";
import { NavbarContext } from "../context/NavbarContext";

import {
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function Pricing() {
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
    <section id={menus[2]} ref={ref} className="bg-base-200 p-12 pb-18">
      <div className="flex flex-col gap-8 items-center">
        {/*  Title */}
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-bold text-2xl text-secondary">
            Cómo será tu sesión
          </h2>
          <p className="text-4xl text-logo font-semibold">
            Características de la terapia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start px-2 gap-8">
          <div className="flex flex-col text-center gap-2 bg-secondary rounded-box p-8 border border-secondary text-base-200 shadow transition-all duration-300 hover:bg-base-200 hover:border-secondary hover:text-secondary">
            <DevicePhoneMobileIcon className="w-16 h-16 m-auto mb-2" />
            <h3 className="text-xl">Formato flexible</h3>
            <h4 className="text-3xl font-bold transition-colors duration-300">
              Online o Presencial
            </h4>
            <p>Escoge la que más se te acomode.</p>
          </div>
          <div className="flex flex-col text-center gap-2 bg-secondary rounded-box p-8 border border-secondary text-base-200 shadow transition-all duration-300 hover:bg-base-200 hover:border-secondary hover:text-secondary">
            <ClockIcon className="w-16 h-16 m-auto mb-2" />
            <h3 className="text-xl">Duración</h3>
            <h4 className="text-3xl font-bold transition-colors duration-300">
              Entre 60 y 90 minutos
            </h4>
            <p>
              Mi objetivo es que la sesión cuente, el tiempo no será un
              impedimento.
            </p>
          </div>
          <div className="flex flex-col text-center gap-2 bg-secondary rounded-box p-8 border border-secondary text-base-200 shadow transition-all duration-300 hover:bg-base-200 hover:border-secondary hover:text-secondary">
            <CurrencyDollarIcon className="w-16 h-16 m-auto mb-2" />
            <h3 className="text-xl">Precio</h3>
            <h4 className="text-3xl font-bold transition-colors duration-300">
              $30.000
            </h4>
            <p>
              Es solo una sesión en la mayoría de los casos, no te preocupes por
              un suma total alta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
