export const Process = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Titlu cu stil Montserrat/Black */}
      <h2 className="text-4xl font-black text-center mb-16 uppercase italic text-slate-800 tracking-tight">
        Proces simplu <span className="text-blue-600 not-italic">3 PAȘI</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { n: "1", t: "Încarcă", d: "Trimite poza pe WhatsApp sau Email" },
          { n: "2", t: "Confirmă", d: "Primești prețul fix și timpul de livrare" },
          { n: "3", t: "Primești", d: "Traducerea PDF semnată digital în 1-2 ore" }
        ].map((step, index) => (
          <div 
            key={step.n} 
            className={`relative p-10 rounded-[2rem] transition-all duration-300 border ${
              index === 1 
                ? "bg-white border-blue-100 shadow-xl shadow-blue-900/5 scale-105 z-10" 
                : "bg-white/50 border-slate-100 hover:bg-white hover:shadow-lg"
            }`}
          >
            {/* Numărul stilizat */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-black text-xl ${
              index === 1 ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
            }`}>
              {step.n}
            </div>

            <h3 className="font-extrabold text-2xl mb-3 text-slate-800">{step.t}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{step.d}</p>
            
            {/* Linie decorativă doar pentru desktop între carduri */}
            {index < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-slate-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);