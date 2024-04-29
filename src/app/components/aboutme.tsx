import Image from "next/image";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { menus, clientData } from "../lib/data";
import { NavbarContext } from "../context/NavbarContext";

export default function AboutMe() {
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
    <section
      className="flex flex-col lg:flex-row bg-logoLighter max-w-full p-16 gap-10"
      id={menus[3]}
      ref={ref}
    >
      <Image
        src={"/bio.webp"}
        alt={`Imagen de ${clientData.name}`}
        width={380}
        height={500}
      />
      <article>
        <div className="flex flex-col gap-2 text-left">
          <h2 className="font-bold text-2xl text-secondary">
            Quién te atenderá
          </h2>
          <h3 className="text-4xl mb-2 text-logo font-semibold">
            {clientData.name}
          </h3>
          <ul className="list-inside list-disc text-lg marker:text-accent marker:text-xl">
            {clientData.info.map((infoEl) => {
              return (
                <li
                  key={clientData.info.indexOf(infoEl)}
                  className="text-base-content mb-2"
                  dangerouslySetInnerHTML={{ __html: infoEl }}
                ></li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
