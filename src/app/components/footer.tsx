import WhatsAppIcon from "@root/public/whatsapp.svg";
import InstagramIcon from "@root/public/instagram.svg";
import Link from "next/link";
import { contactData } from "../lib/data";
/* In case I need more brand icons: https://simpleicons.org/ */

export default function Footer() {
  const { whatsAppLink, instagramLink } = contactData;
  return (
    <footer className="flex flex-col gap-2 items-center p-6 bg-base-200">
      <h3 className="text-logo text-2xl font-semibold">
        Revisa mis Redes Sociales
      </h3>
      {/* Socials */}
      <nav className="flex gap-4">
        <Link className="btn btn-ghost btn-sm btn-circle" href={whatsAppLink}>
          <WhatsAppIcon fill="#EEAF3A" />
        </Link>
        <Link className="btn btn-ghost btn-sm btn-circle" href={instagramLink}>
          <InstagramIcon fill="#EEAF3A" />
        </Link>
      </nav>
      <aside>
        <small className="text-logo">
          Terapia Vinculos de Amor © 2024 - Todos los derechos reservados
        </small>
      </aside>
    </footer>
  );
}
