export const Process = () => {
  const steps = [
    {
      n: "1",
      t: "ÎNCARCĂ ACTELE",
      d: "Faci o poză clară și o trimiți direct pe WhatsApp sau Email. Fără cont, fără stres.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      n: "2",
      t: "CONFIRMĂ OFERTA",
      d: "Îți dăm instant prețul final și timpul exact de livrare. Fără taxe ascunse sau surprize.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      n: "3",
      t: "PRIMEȘTI TRADUCEREA",
      d: "Ai actele traduse, semnate digital și autorizate în 1-2 ore, gata de folosit oriunde.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    // --- SCHIMBARE MARE PE TOT FUNDALUL ---
    // În loc de solid bg-slate-50, folosim un gradient discret
    <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/30 relative overflow-hidden">
      
      {/* AICI E "ȘMECHERIA" - ELEMENTE DE FUNDAL "GLOW" 
        Am adăugat forme mari, extrem de blocate (blur) și transparente, care plutesc subtil.
        Asta elimină efectul de "ieftin" al albului plat.
      */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-6xl h-64 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Titlu și Subtitlu */}
        <div className="text-center mb-24 relative">
          {/* Un glow mic chiar sub titlu pentru a-l scoate în evidență */}
          <div className="absolute inset-0 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none z-[-1]" />
          <h2 className="text-4xl md:text-5xl font-black uppercase italic text-slate-800 tracking-tight mb-4 relative z-10">
            Proces Simplu în <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 not-italic drop-shadow-sm">3 PAȘI</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            De la prima poză pe telefon, până la traducerea autorizată gata pe biroul tău. Fără birocrație inutilă.
          </p>
        </div>

        {/* Grila de Carduri - Menținem cardurile luminoase, dar ele plutesc acum pe fundalul cool */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.n} 
              // Folosim un Glassmorphism ușor (transparență) pe carduri ca să se contopească cu fundalul complex
              className="group relative bg-white/90 p-10 pt-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left backdrop-blur-sm"
            >
              {/* Numărul "Plutitor" care rămâne intens */}
              <div className="absolute -top-6 md:left-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl rotate-[-12deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/30">
                {step.n}
              </div>

              {/* Iconița: Un albastru foarte pal la început, devine intens la hover */}
              <div className="mb-8 text-blue-100 group-hover:text-blue-500 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Titlul: Închis, pentru contrast maxim pe alb */}
              <h3 className="font-black text-2xl mb-4 text-slate-800 uppercase italic tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                {step.t}
              </h3>
              
              {/* Descrierea: Gri mediu */}
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.d}
              </p>
              
              {/* Săgeți animate duble între carduri (Doar pe Desktop) */}
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-8 w-16 items-center justify-center translate-x-1/2 z-20 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};