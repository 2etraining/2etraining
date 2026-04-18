import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-[#0a0f1e] overflow-hidden">
        {/* Circuit Board Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #00a8ff 1px, transparent 1px),
              linear-gradient(0deg, #00a8ff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#00e5b0]/10 border border-[#00e5b0]/30 rounded-full mb-6">
              <span className="text-[#00e5b0] text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                Réponse sous 24h
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>
              Contactez-<span className="text-[#00e5b0]">nous</span>
            </h1>

            <p className="text-xl text-[#8892a6] leading-relaxed">
              Une question sur nos formations ? Un projet de formation sur-mesure ? 
              Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Info (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-xl flex items-center justify-center border border-[#00a8ff]/20 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#00a8ff]" />
                    </div>
                    <div>
                      <div className="text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                        Localisation
                      </div>
                      <div className="text-[#8892a6] leading-relaxed">
                        Avenue Moulay Ismail, Résidence Volubilis<br />
                        Tanger, Maroc
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-2xl p-6 border border-[#00a8ff]/20">
                  <h3 className="text-[#0a0f1e] mb-3" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    Certifications IPC
                  </h3>
                  <p className="text-sm text-[#8892a6] leading-relaxed">
                    Centre de formation IPC. Toutes nos formations délivrent des certifications 
                    reconnues internationalement (CIS/CIT).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (3 columns) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl mb-3 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                    Demande de contact
                  </h2>
                  <p className="text-[#8892a6]">
                    Remplissez ce formulaire et nous vous recontacterons sous 24h
                  </p>
                </div>

                <form action="https://formspree.io/f/mlgpkddn" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prenom" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Prénom <span className="text-[#00a8ff]">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                        placeholder="Jean"
                      />
                    </div>

                    <div>
                      <label htmlFor="nom" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Nom <span className="text-[#00a8ff]">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Email <span className="text-[#00a8ff]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                        placeholder="jean.dupont@entreprise.fr"
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="entreprise" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="participants" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                      Nombre de participants
                    </label>
                    <input
                      type="number"
                      id="participants"
                      name="participants"
                      min="1"
                      className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all"
                      placeholder="Ex: 5"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#0a0f1e] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                      Message <span className="text-[#00a8ff]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#f4f7fb] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre projet de formation, vos besoins spécifiques, vos contraintes..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#00a8ff] text-white rounded-xl hover:bg-[#0096e6] transition-all hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] flex items-center justify-center gap-2 group"
                    style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                  >
                    <span>Envoyer ma demande</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-[#8892a6] text-center">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <a href="#" className="text-[#00a8ff] hover:underline">politique de confidentialité</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f4f7fb] rounded-2xl h-96 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#00a8ff] mx-auto mb-4" />
              <p className="text-[#8892a6]">
                Carte interactive disponible prochainement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Proposez-vous des formations intra-entreprise ?',
                answer: 'Absolument ! Nous intervenons dans vos locaux avec notre matériel pédagogique. Nos programmes peuvent être adaptés à vos besoins spécifiques et à votre environnement technique.'
              },
              {
                question: 'Quelle est la taille des groupes de formation ?',
                answer: 'Nos sessions comptent maximum 12-15 participants pour garantir un suivi individuel optimal et permettre à chacun de pratiquer sur le matériel. Pour les formations intra, nous adaptons selon vos besoins.'
              },
              {
                question: 'Délivrez-vous des certifications officielles ?',
                answer: 'Oui, toutes nos formations IPC délivrent des certifications CIS (Certified IPC Specialist) ou CIT (Certified IPC Trainer) reconnues internationalement et valables 2 ans.'
              },
              {
                question: 'Quels sont les prérequis pour les formations IPC ?',
                answer: 'Les prérequis varient selon le standard IPC visé. En général, une expérience en assemblage électronique est recommandée. Contactez-nous pour évaluer votre éligibilité.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg mb-3 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  {faq.question}
                </h3>
                <p className="text-[#8892a6] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}