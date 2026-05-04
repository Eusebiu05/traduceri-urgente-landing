import React from 'react';
import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer';

export default function ServiciiOferite() {
  
  const servicii = [
    {
      titlu: "Pachet Plecare Străinătate",
      descriere: "Pentru absolvenții de Post-Liceală (Sanitară sau alte profesii). Traducem rapid diploma de bac, diploma de post-liceală și foaia matricolă (față-verso), cu sau fără legalizare.",
      icon: "🧳",
      mesajWhatsApp: "Bună ziua! Aș dori o evaluare pentru traducerea unui pachet de acte de studii (diplomă, foaie matricolă) pentru plecarea în străinătate. Vă trimit documentele?"
    },
    {
      titlu: "Credite Bancare (Venituri Extern)",
      descriere: "Lucrezi în străinătate și vrei credit în România? Traducem contractul de muncă, fluturașii de salariu, declarațiile de venit și adeverințele de la angajator, gata pentru bancă.",
      icon: "🏦",
      mesajWhatsApp: "Bună ziua! Am nevoie de traducerea unor acte doveditoare ale veniturilor din străinătate (contract muncă/fluturași) pentru un credit bancar. Vă trimit pozele pentru preț?"
    },
    {
      titlu: "Dosare Medicale & Tratament",
      descriere: "Traduceri urgente și precise pentru pacienții care merg la tratament în UE sau vin cu documente din afară: scrisori medicale, fișe de externare, analize și istoric medical.",
      icon: "🏥",
      mesajWhatsApp: "Bună ziua! Am nevoie de o traducere urgentă pentru un dosar medical / analize. Vă pot lăsa documentele aici pentru un preț și termen de livrare?"
    },
    {
      titlu: "Asistenți Medicali (OAMGMAMR)",
      descriere: "Expertiză medicală și administrativă. Traducem Certificatul de Membru și Avizul Anual, esențiale pentru recunoașterea profesională internațională.",
      icon: "🧑‍⚕️",
      mesajWhatsApp: "Bună! Mă interesează traducerea actelor de asistent medical (Certificat Membru / Aviz) pentru străinătate. Cât costă și în cât timp sunt gata?"
    },
    {
      titlu: "Ieșire din Țară Auto (Comodat)",
      descriere: "Ieși din țară cu mașina pe firmă sau prin comodat notarial? Oferim traduceri autorizate ale contractelor de comodat pentru a trece granița fără probleme.",
      icon: "🚗",
      mesajWhatsApp: "Bună ziua! Am nevoie de traducerea unui contract de comodat auto pentru a ieși din țară. Vă trimit poza documentului pentru o cotație?"
    },
    {
      titlu: "Declarații Minori & Alocații",
      descriere: "Pleci cu copilul în străinătate sau ceri alocația? Traducem în engleză declarațiile notariale pentru minori și documentele necesare pentru dosarele de alocație.",
      icon: "👶",
      mesajWhatsApp: "Bună ziua! Aș dori să traduc o declarație notarială pentru minor / acte pentru dosarul de alocație. Vă trimit pozele să îmi spuneți prețul?"
    },
    {
      titlu: "Cetățenie & Pensii (RO-IT)",
      descriere: "Traduceri pentru dosare de cetățenie (acte personale, cazier). Oferim asistență și pentru documentele necesare transferului de pensie între România și Italia.",
      icon: "🇪🇺",
      mesajWhatsApp: "Bună ziua! Vă contactez pentru traducerea unor acte necesare la dosarul de cetățenie / pensie. Vă pot trimite documentele pentru evaluare?"
    },
    {
      titlu: "Studenți (Erasmus/Work & Travel)",
      descriere: "Ai fost acceptat la studii afară sau aplici pentru burse? Traducem diplome, foi matricole și adeverințe de studii în cel mai scurt timp.",
      icon: "🎓",
      mesajWhatsApp: "Bună! Am nevoie de traducerea unor acte de studii (adeverință, foaie matricolă) pentru Erasmus / facultate. Vă trimit documentele să îmi faceți o ofertă?"
    },
    {
      titlu: "Traduceri Sentințe & Juridic",
      descriere: "Traducerea documentelor cu caracter legal și juridic, cu precădere sentințe judecătorești (inclusiv sentințe de divorț pentru recunoaștere în străinătate).",
      icon: "⚖️",
      mesajWhatsApp: "Bună ziua! Am de tradus un document juridic / sentință. Vă trimit documentul pentru a-mi comunica prețul și timpul de execuție?"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* Header-ul stă acum sus de tot, fără padding deasupra lui */}
      <Header />
      
      {/* Zona de conținut principal, aici aplicăm padding-ul ca să împingem doar textul */}
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Antetul paginii */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Nevoie de traduceri? Alege situația ta:
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Nu oferim doar „traduceri”, ci soluții rapide pentru planurile tale. 
              Alege serviciul de care ai nevoie și lasă birocrația în seama noastră.
            </p>
          </div>

          {/* Grila cu servicii */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicii.map((serviciu, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{serviciu.icon}</div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">{serviciu.titlu}</h2>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {serviciu.descriere}
                </p>
                
                <a 
                // Aici transformăm mesajul în format de link folosind encodeURIComponent
                href={`https://wa.me/40765786180?text=${encodeURIComponent(serviciu.mesajWhatsApp)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 text-emerald-600 font-bold hover:text-emerald-700 hover:underline flex items-center gap-2 text-sm"
              >
                Trimite actele acum <span>→</span>
              </a>
              </div>
            ))}
          </div>
          
          {/* Secțiune Call-to-Action jos */}
        <div className="mt-20 text-center bg-white p-10 md:p-14 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Ai alt tip de document? Hai să discutăm! 📄
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
            Traducem o gamă foarte largă de acte din și în majoritatea limbilor de circulație. 
            Trimite-ne o poză cu documentul tău și îți spunem pe loc prețul și timpul de livrare.
          </p>
          <a 
            href={`https://wa.me/40765786180?text=${encodeURIComponent("Bună ziua! Am un alt tip de document pentru traducere. Vă trimit poza pentru a-mi comunica prețul și detaliile?")}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 md:px-10 rounded-full transition-all shadow-sm hover:shadow-md text-lg"
          >
            Trimite actul pe WhatsApp
          </a>
          <p className="mt-5 text-sm text-slate-500 font-medium">
            ⚡️ Răspundem rapid. Livrare digitală imediată.
          </p>
        </div>

        </div>
      </main>

      {/* Footer-ul stă acum la bază, împins de conținutul de deasupra */}
      <Footer />
    </div>
  );
}