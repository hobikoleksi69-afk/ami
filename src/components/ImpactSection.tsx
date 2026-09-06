import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { statsMetricsData } from '../data';

export const ImpactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-anggota': 28540,
    'stat-program': 142,
    'stat-komunitas': 84,
    'stat-karya': 520,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate smoothly to target values
          statsMetricsData.forEach((stat) => {
            const duration = 1400;
            const startVal = Math.floor(stat.targetValue * 0.75); // Start from 75% so it's NEVER 0!
            const endVal = stat.targetValue;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quad
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(startVal + (endVal - startVal) * easeOut);

              setCounts((prev) => ({ ...prev, [stat.id]: currentVal }));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts((prev) => ({ ...prev, [stat.id]: endVal }));
              }
            };

            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'stat-anggota':
        return <Users className="w-6 h-6 text-[#2E9E5B]" />;
      case 'stat-program':
        return <Award className="w-6 h-6 text-[#2E9E5B]" />;
      case 'stat-komunitas':
        return <MapPin className="w-6 h-6 text-[#E31E24]" />;
      case 'stat-karya':
        return <Sparkles className="w-6 h-6 text-[#43C572]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#2E9E5B]" />;
    }
  };

  return (
    <section
      id="dampak"
      ref={containerRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-[#102d1d] text-white relative overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#43C572]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-300 bg-white/10 border border-white/15 backdrop-blur-xs mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Jejak Dampak Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Angka Riil, Gerakan Nyata yang Bisa Dipertanggungjawabkan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">
            Bagi kami di Inisiatif AMI, keberhasilan bukan diukur dari ramainya retorika, melainkan dari berapa banyak anak
            muda yang kapasitasnya bertumbuh dan bergerak memberi manfaat di daerahnya.
          </p>
        </div>

        {/* 4 Big Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statsMetricsData.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getMetricIcon(stat.id)}
                </div>

                {/* Animated Metric Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 font-mono">
                  {counts[stat.id] ? counts[stat.id].toLocaleString('id-ID') : stat.targetValue.toLocaleString('id-ID')}
                  <span className="text-[#43C572] ml-0.5 text-2xl sm:text-3xl lg:text-4xl">
                    {stat.displaySuffix}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-emerald-200/70 leading-relaxed pt-3 border-t border-white/10 mt-3">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Note below stats */}
        <div className="mt-10 text-center text-xs text-emerald-300/60 font-medium">
          *Data statistik terhimpun secara real-time melalui sistem registrasi keanggotaan AMI ID dan verifikasi program semester berjalan.
        </div>
      </div>
    </section>
  );
};
