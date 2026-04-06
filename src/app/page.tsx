export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* HEADER (Bara de Navigație) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter text-slate-800">
            TRADUCERI <span className="text-blue-600">URGENTE</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-slate-600">
            <span>Program: L-D, 06:00 - 22:00</span>
            <span className="text-green-600 font-bold">● Deschis Acum</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION (Partea de sus, întunecată, de impact) */}
      <section className="relative bg-slate-900 text-white py-20 px-4">
        {/* Un gradient subtil pe fundal pentru design premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/90 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-8 shadow-lg shadow-red-600/30">
            Livrare Urgentă - Iași & Național
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Traduceri Acte Auto <br />
            <span className="text-blue-400">Gata în 1-2 ORE</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light">
            Nu mai pierde clienți din cauza întârzierilor. Livrăm traducerile
            direct în PDF. Printezi color și ai dosarul complet pentru
            înmatriculare.
          </p>

          {/* Butonul de Conversie - Mare și Evident */}
          <a
            href="https://wa.me/40765786180"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-slate-900 font-black py-5 px-10 rounded-full text-xl shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 w-full md:w-auto justify-center"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Trimite Actele pe WhatsApp
          </a>
          <p className="mt-6 text-sm font-semibold text-slate-300 bg-slate-800/50 py-2 px-6 rounded-full border border-slate-700">
            Preț începând de la{" "}
            <span className="text-green-400 font-bold text-base">35 LEI</span> /
            act auto
          </p>
        </div>
      </section>

      {/* SECȚIUNEA DE ÎNCREDERE (Cifrele Cristinei) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center -mt-24 relative z-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
              ⏱️
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800">
              Excelență în Urgențe
            </h3>
            <p className="text-slate-600">
              Combinăm viteza de livrare cu rigoarea unui traducător autorizat. Primești un document impecabil, gata de depus, la cel mai bun raport calitate-preț din Iași.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center transform md:-translate-y-4">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-600/30">
              📜
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800">
              +23.800 Acte
            </h3>
            <p className="text-slate-600">
              Traducători autorizați de Ministerul Justiției. Semnătură și
              ștampilă digitală validă.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
              📱
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800">
              100% Online
            </h3>
            <p className="text-slate-600">
              Trimite poza pe WhatsApp. Primești PDF-ul pe WhatsApp. Fără
              drumuri la birou.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER PROFESIONAL */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coloana 1: Brand */}
          <div>
            <div className="font-black text-xl mb-4 tracking-tighter">
              TRADUCERI{" "}
              <span className="text-blue-400 font-medium italic">URGENTE</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Traducător autorizat de Ministerul Justiției, cu peste{" "}
              <span className="text-white font-bold text-base tracking-normal">
                23.800 de documente oficiale
              </span>{" "}
              traduse și semnate. Experiență vastă în domeniul juridic, tehnic
              și auto, cu livrare rapidă în format digital.
            </p>
          </div>

          {/*Date Firmă */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-500">
              Date Legale
            </h4>
            <ul className="text-slate-400 text-sm space-y-2 font-mono">
              <li>Traduceri Urgente SRL</li>
              <li>CUI:35777175</li>
              <li>J2016000633229</li>
              <li>Sediul: Iași, România</li>
            </ul>
          </div>

          {/*Program */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-500">
              Program de Lucru
            </h4>
            <p className="text-slate-400 text-sm">
              Luni - Duminică:{" "}
              <span className="text-white font-bold">06:00 - 22:00</span>
            </p>
            <p className="text-xs text-slate-500 mt-2 italic">
              Deschis inclusiv în zilele de sărbătoare legală.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 Traduceri Urgente SRL. Toate drepturile rezervate.</p>
          {/* Semnătura ta oficială de PFA */}
          <p className="mt-2 text-xs text-slate-500">
            Dezvoltat de{" "}
            <span className="text-blue-400 font-bold tracking-widest uppercase">
              FĂGĂTEANU DUMITRU EUSEBIU PFA
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
