import { Users, BookOpen, Award, Target, TrendingUp, Heart } from 'lucide-react';

export default function APropos() {
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
                Depuis 1996
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>
              <span className="text-[#00e5b0]">30 ans</span> d'expertise dans l'industrie électronique/électrique
            </h1>

            <p className="text-xl text-[#8892a6] leading-relaxed">
              Nous préparons une présentation complète de notre centre de formation, 
              notre équipe d'experts et nos 30 ans d'expertise
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-[#00a8ff]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Notre histoire arrive bientôt
            </h2>
            
            <p className="text-xl text-[#8892a6] leading-relaxed">
              Nous préparons une présentation complète de notre centre de formation, 
              notre équipe d'experts et nos 30 ans d'expertise
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '30 ans d\'expertise',
                description: 'Expertise approfondie dans l\'industrie électronique/électrique'
              },
              {
                icon: BookOpen,
                title: 'Formateurs qualifiés',
                description: 'Équipe d\'experts IPC expérimentés'
              },
              {
                icon: Award,
                title: 'Certifications reconnues',
                description: 'Certifications IPC internationalement reconnues'
              }
            ].map((fact, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-2xl flex items-center justify-center border border-[#00a8ff]/20">
                  <fact.icon className="w-10 h-10 text-[#00a8ff]" />
                </div>
                <h3 className="text-xl mb-3 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  {fact.title}
                </h3>
                <p className="text-[#8892a6] leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Nos services
            </h2>
            <p className="text-xl text-[#8892a6] max-w-2xl mx-auto">
              Solutions complètes pour l'industrie électronique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Formations IPC',
                description: 'Programmes certifiants conformes aux standards internationaux IPC'
              },
              {
                icon: TrendingUp,
                title: 'Import matériel',
                description: 'Commercialisation d\'équipements et moyens pour l\'industrie électronique'
              },
              {
                icon: Heart,
                title: 'Installation d\'ateliers',
                description: 'Travaux d\'installation et qualification d\'ateliers et espaces de travail électronique et électrique'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-xl flex items-center justify-center border border-[#00a8ff]/20 mb-6">
                  <service.icon className="w-7 h-7 text-[#00a8ff]" />
                </div>
                <h3 className="text-xl mb-3 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-[#8892a6] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00a8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
            Intéressé par nos services ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez nos formations IPC et notre gamme complète de services pour l'industrie électronique
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/formations"
              className="inline-block px-8 py-4 bg-white text-[#00a8ff] rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Voir les formations
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}