import Link from "next/link";
import { contactData } from "../lib/data";
import { InboxArrowDownIcon } from "@heroicons/react/16/solid";

export default function LastHero() {
  const { whatsAppLink } = contactData;

  return (
    <div
      className="hero bg-fixed h-80 "
      style={{
        backgroundImage: "url(/prefooter-scaled.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 py-4"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <p className="mb-5 text-4xl font-bold p-2">
            ¿Crees que te podría ayudar? <br /> ¿Tienes una consulta?
          </p>
          <Link
            className="btn btn-accent btn-lg text-xl text-base-100"
            href={whatsAppLink}
          >
            <InboxArrowDownIcon className="w-8 h-8" />
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
