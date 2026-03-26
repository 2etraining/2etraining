import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  Microscope, 
  Cpu, 
  Wrench, 
  Eye,
  Settings,
  Package,
  Award,
  CheckCircle,
  TrendingUp,
  CircuitBoard
} from 'lucide-react';

export default function Home() {
  const [activeLearnersCount, setActiveLearnersCount] = useState(0);

  // Counter animation
  useEffect(() => {
    const target = 287;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setActiveLearnersCount(target);
        clearInterval(timer);
      } else {
        setActiveLearnersCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const topCourses = [
    {
      id: 1,
      domain: 'Inspection',
      title: 'IPC-A-610 - Acceptabilité des assemblages',
      description: 'Critères d\'acceptabilité pour assemblages électroniques',
      duration: '4 jours',
      level: 'CIS/CIT',
      color: 'blue'
    },
    {
      id: 2,
      domain: 'Soudure',
      title: 'IPC J-STD-001 - Exigences de soudage',
      description: 'Requis pour assemblages électriques et électroniques soudés',
      duration: '5 jours',
      level: 'CIS/CIT',
      color: 'teal'
    },
    {
      id: 3,
      domain: 'Retouche',
      title: 'IPC-7711/7721 - Retouche et réparation',
      description: 'Retouche, modification et réparation de cartes électroniques',
      duration: '5 jours',
      level: 'CIS/CIT',
      color: 'blue'
    }
  ];

  const services = [
    { icon: Microscope, label: 'Formations IPC certifiantes' },
    { icon: Package, label: 'Import matériel électronique' },
    { icon: Settings, label: 'Installation d\'ateliers' },
    { icon: Eye, label: 'Qualification espaces électronique et électrique' },
    { icon: Wrench, label: 'Équipements de soudure' },
    { icon: Cpu, label: 'Outillage de précision' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0a0f1e] overflow-hidden">
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
        
        {/* Decorative Dots */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#00e5b0] rounded-full opacity-50" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-[#00a8ff] rounded-full opacity-30" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#00e5b0] rounded-full opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 bg-[#00e5b0]/10 border border-[#00e5b0]/30 rounded-full mb-6">
                <span className="text-[#00e5b0] text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                  Formations IPC pour l'industrie électronique/électrique
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl mb-6 text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>
                Standards <span className="text-[#00e5b0]">IPC</span> pour l'industrie électronique
              </h1>

              <p className="text-xl text-[#8892a6] mb-8 leading-relaxed">
                Formation et habilitation aux normes IPC internationales. Import de matériel électronique 
                et installation complète d'ateliers de production.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/formations"
                  className="px-8 py-4 bg-[#00a8ff] text-white rounded-xl hover:bg-[#0096e6] transition-all hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] inline-block"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  Nos formations IPC
                </Link>
                <Link
                  to="/a-propos"
                  className="px-8 py-4 bg-transparent border-2 border-[#00a8ff]/50 text-[#00a8ff] rounded-xl hover:border-[#00a8ff] hover:bg-[#00a8ff]/5 transition-all inline-block"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Right Column - Live Stats Card */}
            <div 
              className="relative bg-[#0a0f1e]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#00a8ff]/20"
              style={{ boxShadow: '0 0 24px rgba(0,168,255,0.15)' }}
            >
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-[#00a8ff]/5 rounded-full blur-2xl" />
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#00e5b0] rounded-full animate-pulse" />
                  <span className="text-[#8892a6] text-sm">Formations en cours</span>
                </div>
                <div className="text-5xl text-white mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                  {activeLearnersCount}
                </div>
                <div className="text-[#8892a6]">techniciens certifiés IPC</div>
              </div>

              <div className="mb-8 pb-6 border-b border-[#00a8ff]/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#8892a6]">Taux de réussite certifications</span>
                  <span className="text-[#00e5b0]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>98.2%</span>
                </div>
                <div className="w-full h-2 bg-[#00a8ff]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00a8ff] to-[#00e5b0] rounded-full" style={{ width: '98.2%' }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[#8892a6] text-sm mb-3">Formations populaires</div>
                {[
                  { name: 'IPC-A-610', icon: Eye, color: '#00a8ff' },
                  { name: 'IPC J-STD-001', icon: Wrench, color: '#00e5b0' },
                  { name: 'IPC-7711/7721', icon: Settings, color: '#00a8ff' }
                ].map((session, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#00a8ff]/5 rounded-lg border border-[#00a8ff]/10 hover:border-[#00a8ff]/30 transition-all">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${session.color}15` }}
                    >
                      <session.icon className="w-5 h-5" style={{ color: session.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>
                        {session.name}
                      </div>
                    </div>
                    <div className="text-[#00e5b0] text-sm">→</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#00a8ff] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '+1 200', label: 'certifications IPC' },
              { value: '12+', label: 'standards IPC' },
              { value: '30 ans', label: 'd\'expertise' },
              { value: '100%', label: 'conformité IPC' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl text-white mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Preview */}
      <section className="py-24 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Formations IPC certifiantes
            </h2>
            <p className="text-xl text-[#8892a6] max-w-2xl mx-auto">
              Programmes conformes aux standards internationaux IPC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {topCourses.map((course) => (
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

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-[#8892a6]">
                      <span>⏱ {course.duration}</span>
                      <span>🎓 {course.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/formations"
              className="px-8 py-4 bg-[#0a0f1e] text-white rounded-xl hover:bg-[#0a0f1e]/90 transition-all inline-block"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              Toutes nos formations IPC
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
        {/* Hexagon Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #00e5b0 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Nos services
            </h2>
            <p className="text-xl text-[#8892a6] max-w-2xl mx-auto">
              Solutions complètes pour votre industrie électronique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-[#0a0f1e]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#00e5b0]/20 hover:border-[#00e5b0]/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,229,176,0.15)] text-center">
                  {/* Icon Container */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-[#00e5b0]/20 to-[#00a8ff]/20 rounded-2xl rotate-45"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-[#00e5b0]" />
                    </div>
                  </div>

                  <h3 className="text-white text-lg" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                    {service.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0a0f1e] mb-3" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
              Certifications et agréments
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'IPC Certified', icon: Award },
              { name: 'ISO 9001', icon: CheckCircle },
              { name: 'J-STD Approved', icon: CircuitBoard },
              { name: 'IPC/WHMA', icon: TrendingUp }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#00a8ff]/40 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5b0]/10 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,168,255,0.2)] transition-all">
                  <cert.icon className="w-8 h-8 text-[#00a8ff]" />
                </div>
                <div className="text-[#0a0f1e]" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00a8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                Besoin d'une formation IPC ?
              </h2>
              <p className="text-white/90 text-lg">
                Contactez-nous pour un programme certifiant adapté à vos besoins
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#00a8ff] rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl inline-block"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}