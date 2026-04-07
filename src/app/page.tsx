// src/app/page.tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Recruitment } from "@/components/Recruitment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    /* Am păstrat bg-white pentru contrastul acela "fresh" de tip ZenMed, 
       dar componentele din interior (Hero, Process) vor aduce 
       culoarea saturată care lipsea.
    */
    <main className="min-h-screen selection:bg-blue-300 bg-white">
      {/* 1. Header fixat cu CTA și logo */}
      <Header />

      {/* 2. Mega Posterul (Hero) - Elementul central de impact */}
      <Hero />

      {/* 3. Procesul în 3 pași - Claritate vizuală */}
      <Process />

      {/* 4. Secțiunea Despre Noi - Încredere și Admin */}
      <About />

      {/* 5. Secțiunea pentru Traducători (Recruitment) */}
      <Recruitment />

      {/* 6. Footer-ul cu datele de identificare și Review Google */}
      <Footer />
    </main>
  );
}