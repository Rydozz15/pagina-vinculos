import clientImage from "@root/public/bio.webp";

export const menus = ["Inicio", "Qué trata", "Características", "Sobre mí"];
export interface NavbarContextType {
  visibleSection: string;
  setVisibleSection: React.Dispatch<React.SetStateAction<any>>; // Cambia 'any' por el tipo adecuado para visibleSection
}

export const clientData = {
  companyName: "Vinculos de Amor",
  name: "Francia Fuentes Abarca",
  info: [
    `<strong>Soy Francia Fuentes</strong>, y te doy la bienvenida a mi espacio de terapias alternativas.
Desde que nació mi hijo, hace ya unos años, empecé a interesarme por las terapias naturales y alternativas para ayudar a mi hijo y a mí misma a <strong>recuperar la salud de una forma más natural.</strong>
`,
    `Soy <strong>Ingeniero en Información y Control de Gestión de la Universidad de Chile.</strong>
Desde hace <strong>6 años me</strong> dedico completamente a <strong>sanar el alma a través</strong> de diversas técnicas, enfocándome actualmente en las <strong>constelaciones familiares con vincores.</strong>
`,
    `A lo largo de los años, <strong>he estudiado y obtenido certificaciones en varias disciplinas,</strong> entre ellas:
Reiki 1 y 2; Registros Akásicos 1 y 2; Sanación Luz Dorada Nivel 1, 2, 3 y 4; Limpieza con la Cruz de Ank; Péndulo Hebreo Nivel 1, 2 y 3; Meditación Mindfulness; Sanación y Curación cuántica Pluridimensional; Biomagnetismo; Terapia de limpieza de energías negativas multidimensional; Terapia de curación basada en el curso de Milagros; y Psicogenealogía transgeneracional.`,
    `<strong>Mi objetivo principal es ayudarte a encontrar el equilibrio emocional, físico y espiritual</strong> que necesitas para vivir una vida plena y saludable. Me encantaría poder acompañarte en este proceso y juntos encontrar la terapia que mejor se adapte a tus necesidades.`,
  ],
};

export const contactData = {
  mail: "example@example.com",
  whatsAppLink: "https://wa.me/message/GRXYKATHAP2OB1",
  instagramLink: "https://www.instagram.com/terapias.vinculosdeamor/",
  phoneNumber: "+56973116616",
  accountName: "Vinculos de Amor",
  statusMessage: "Suele responder en 1 hora",
  chatMessage: "Buenas, espero estés súper. ¿En qué te puedo ayudar?",
  placeholder: "Escribe tu consulta...",
};
