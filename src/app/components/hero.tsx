import { useContext } from "react";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import { menus } from "../lib/data";
import { NavbarContext } from "../context/NavbarContext";

import { contactData } from "../lib/data";

export default function Hero() {
  const { setVisibleSection } = useContext(NavbarContext);
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, entry) => {
      if (inView) {
        setVisibleSection(entry.target.id);
      }
    },
  });

  const { whatsAppLink } = contactData;

  return (
    <section
      id={menus[0]}
      className="hero min-h-screen hero-opacity bg-[url('/hero-scaled.webp')]"
      ref={ref}
    >
      <div className="hero-content text-center">
        <div className="flex flex-col items-center mt-[-8rem] lg:mt-[-6rem]">
          <p className="pb-6 text-2xl text-accent">
            SANANDO RELACIONES, LIBERANDO BLOQUEOS Y ENCONTRANDO LA PAZ INTERIOR
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-secondary">
            Terapia de Constelaciones Familiares
          </h1>
          <p className="py-6 text-2xl text-accent">
            Estoy aquí para guiarte en tu camino hacia una vida más plena y
            ayudarte a comprender aquello que se te dificulta.
          </p>
          <Link href={whatsAppLink}>
            <button className="btn btn-lg md:btn-md lg:btn-lg btn-secondary text-white">
              Agenda una sesión
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
