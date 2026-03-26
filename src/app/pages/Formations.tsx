import { useState } from 'react';
import { Link } from 'react-router';
import { Filter } from 'lucide-react';

export default function Formations() {
  const [selectedDomain, setSelectedDomain] = useState('all');

  const courses = [
    {
      id: 1,
      domain: 'Inspection',
      title: 'IPC-A-610 - Acceptabilité des assemblages électroniques',
      description: 'Le standard le plus largement utilisé pour l\'inspection et la qualité des assemblages électroniques',
      duration: '4 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'blue'
    },
    {
      id: 2,
      domain: 'Soudure',
      title: 'IPC J-STD-001 - Exigences pour assemblages soudés',
      description: 'Standards reconnus pour matériaux, méthodes et critères de vérification pour assemblages soudés de haute qualité',
      duration: '5 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'teal'
    },
    {
      id: 3,
      domain: 'Retouche',
      title: 'IPC-7711/7721 - Retouche, modification et réparation',
      description: 'Procédures de retouche, de réparation et de modification d\'assemblages électroniques',
      duration: '5 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'blue'
    },
    {
      id: 4,
      domain: 'Câblage',
      title: 'IPC/WHMA-A-620 - Exigences pour câbles et harnais',
      description: 'Critères d\'acceptabilité pour câbles, faisceaux de câbles et harnais de câblage',
      duration: '4 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'teal'
    },
    {
      id: 5,
      domain: 'Inspection',
      title: 'IPC-A-600 - Acceptabilité des circuits imprimés',
      description: 'Standards pour inspection et acceptabilité des circuits imprimés nus',
      duration: '3 jours',
      level: 'CIS',
      price: 'Sur devis',
      color: 'blue'
    },
    {
      id: 6,
      domain: 'Design',
      title: 'IPC-2221 - Design générique des circuits imprimés',
      description: 'Principes de conception pour cartes électroniques imprimées',
      duration: '3 jours',
      level: 'Tous',
      price: 'Sur devis',
      color: 'teal'
    },
    {
      id: 7,
      domain: 'Retouche',
      title: 'IPC-7711 CMS - Retouche composants CMS',
      description: 'Techniques de retouche et réparation pour composants montés en surface',
      duration: '4 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'blue'
    },
    {
      id: 8,
      domain: 'Soudure',
      title: 'IPC J-STD-001 CMS - Soudage composants CMS',
      description: 'Procédures de soudage pour technologie de montage en surface',
      duration: '5 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'teal'
    },
    {
      id: 9,
      domain: 'Inspection',
      title: 'IPC-A-610 + J-STD-001 Combiné',
      description: 'Formation complète inspection et soudage',
      duration: '8 jours',
      level: 'CIS/CIT',
      price: 'Sur devis',
      color: 'blue'
    },
    {
      id: 10,
      domain: 'Spécialisation',
      title: 'ESD - Contrôle électrostatique',
      description: 'Maîtrise et contrôle des décharges électrostatiques',
      duration: '2-3 jours',
      level: 'Tous',
      price: 'Sur devis',
      color: 'teal'
    }
  ];

  const domains = [
    { value: 'all', label: 'Toutes les formations IPC' },
    { value: 'Inspection', label: 'Inspection & qualité' },
    { value: 'Soudure', label: 'Soudage & assemblage' },
    { value: 'Retouche', label: 'Retouche & réparation' },
    { value: 'Câblage', label: 'Câblage & harnais' },
    { value: 'Design', label: 'Conception PCB' }
  ];

  const filteredCourses = selectedDomain === 'all' 
    ? courses 
    : courses.filter(course => course.domain === selectedDomain);

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
                Certifications internationales
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>
              Formations <span className="text-[#00e5b0]">standards IPC</span>
            </h1>

            <p className="text-xl text-[#8892a6] leading-relaxed">
              Catalogue complet des formations certifiantes aux standards IPC internationaux. 
              Devenez CIS (Certified IPC Specialist) ou CIT (Certified IPC Trainer) avec nos programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Formations Grid with Filters */}
      <section className="py-16 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-[#00a8ff]" />
              <h2 className="text-xl text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                Filtrer par domaine
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {domains.map((domain) => (
                <button
                  key={domain.value}
                  onClick={() => setSelectedDomain(domain.value)}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    selectedDomain === domain.value
                      ? 'bg-[#00a8ff] text-white shadow-lg shadow-[#00a8ff]/30'
                      : 'bg-white text-[#0a0f1e] hover:bg-gray-50 border border-gray-200'
                  }`}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}
                >
                  {domain.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[#8892a6]">
              <span className="text-[#00a8ff]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                {filteredCourses.length}
              </span> formation{filteredCourses.length > 1 ? 's' : ''} IPC disponible{filteredCourses.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ 
                  borderTop: `3px solid ${course.color === 'blue' ? '#00a8ff' : '#00e5b0'}`,
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs"
                      style={{ 
                        backgroundColor: course.color === 'blue' ? '#00a8ff15' : '#00e5b015',
                        color: course.color === 'blue' ? '#00a8ff' : '#00e5b0',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {course.domain}
                    </span>
                  </div>

                  <h3 className="text-xl mb-3 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    {course.title}
                  </h3>

                  <p className="text-[#8892a6] mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8892a6]">⏱ Durée</span>
                      <span className="text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8892a6]">🎓 Certification</span>
                      <span className="text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-[#8892a6] text-sm">Tarif</span>
                      <span className="text-[#00a8ff] text-xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                        {course.price}
                      </span>
                    </div>
                  </div>

                  <Link to="/contact" className="block w-full mt-4 px-6 py-3 bg-[#0a0f1e] text-white rounded-lg hover:bg-[#0a0f1e]/90 transition-all group-hover:shadow-lg text-center">
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                Pourquoi se certifier IPC ?
              </h2>
              <div className="space-y-4 text-[#8892a6] leading-relaxed">
                <p>
                  Les certifications IPC sont reconnues internationalement comme référence dans l'industrie électronique. 
                  Elles garantissent des compétences standardisées et une qualité uniforme dans la production d'assemblages électroniques.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e5b0] mt-1">✓</span>
                    <span>Standards reconnus par les leaders mondiaux de l'électronique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e5b0] mt-1">✓</span>
                    <span>Certification valable 2 ans, renouvelable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00e5b0] mt-1">✓</span>
                    <span>Formation pratique sur équipements professionnels</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-2xl p-8 border border-[#00a8ff]/20">
              <h3 className="text-2xl mb-6 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                Niveaux de certification
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-[#00a8ff] mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    CIS - Certified IPC Specialist
                  </div>
                  <p className="text-sm text-[#8892a6]">
                    Niveau opérateur : capacité à exécuter des opérations conformes aux standards IPC
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-[#00e5b0]  mb-2" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    CIT - Certified IPC Trainer
                  </div>
                  <p className="text-sm text-[#8892a6]">
                    Niveau formateur : capacité à former et certifier des CIS dans votre entreprise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00a8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
            Formation sur-mesure ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nous adaptons nos programmes IPC aux besoins spécifiques de votre entreprise
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#00a8ff] rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </>
  );
}