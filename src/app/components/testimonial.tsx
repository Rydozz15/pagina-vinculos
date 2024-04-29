import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function TestimonialSection() {
  return (
    <div
      className="hero bg-fixed h-[500px]"
      style={{
        backgroundImage: "url(/testimonio-scaled.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 py-4"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <ChatBubbleBottomCenterTextIcon className="w-10 h-10 text-accent m-auto" />
          <p className="mb-5 text-xl font-bold p-2">
            Recomiendo 100% las terapias de Francia. Me han ayudado muchísimo a
            descubrir, pensar, saber, aceptar y sanar. Es una muy buena
            profesional, muy cercana, empática, carismática, pero por sobretodo
            sanadora.
          </p>
          <div className="inline-block rounded-badge bg-base-200 py-2 px-5">
            <p className="text-l text-secondary font-bold">
              VALERIA DE LA BARRA
            </p>
            <p className="text-m text-accent">Paciente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
