"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import picture from "@/public/picture.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen overflow-hidden scrollbar screen-container font-absolut-pro">
      <span className="fixed top-0 left-0 w-full h-full -z-40 bg-gradient-to-tl from-white via-white/10 to-white" />
      <main className="relative flex flex-col items-center justify-center w-full h-screen select-none">
        <section
          id="contact"
          className="w-full py-6 bg-gradient-to-b mb-12 from-zinc-900/60 to-transparent"
        >
          <span className="container px-3 md:px-6 lg:px-12 flex flex-col mx-auto">
            <span className="relative flex flex-col h-full gap-6 lg:gap-12 p-4 bg-cover border shadow-lg md:p-6 lg:p-12 rounded-xl md:flex-row bg-gradient-to-t from-zinc-100/95 to-white/95">
              <ContactForm />
              <span className="flex-1 bg-[url('/picture.jpg')] bg-cover bg-center rounded-xl" />
            </span>
          </span>
        </section>
      </main>
    </div>
  );
}
