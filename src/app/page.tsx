"use client";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import TestimonialSection from "./components/testimonial";
import AboutMe from "./components/aboutme";
import LastHero from "./components/lastHero";
import Characteristics from "./components/characteristics";
/* Contact */
import { FloatingWhatsApp } from "react-floating-whatsapp";
/* Data */
import { contactData } from "./lib/data";
import WhatsappPhoto from "@root/public/wsp-av.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Characteristics />
      <TestimonialSection />
      <Pricing />
      <AboutMe />
      <LastHero />
      <FloatingWhatsApp
        phoneNumber={contactData.phoneNumber}
        accountName={contactData.accountName}
        statusMessage={contactData.statusMessage}
        chatMessage={contactData.chatMessage}
        placeholder={contactData.placeholder}
        avatar={WhatsappPhoto.src}
      />
    </main>
  );
}
