import React from 'react';
import { Calendar, Users, ShieldCheck, Heart, Target, Award } from 'lucide-react';
import { DIFERENCIAIS } from '../data/content';

export const Diferenciais: React.FC = () => {
  const icons = [
    <Calendar className="w-5 h-5 text-[#0D3B26]" key="calendar" />,
    <Users className="w-5 h-5 text-[#0D3B26]" key="users" />,
    <ShieldCheck className="w-5 h-5 text-[#0D3B26]" key="shield" />,
    <Heart className="w-5 h-5 text-[#D97706]" key="heart" />,
    <Target className="w-5 h-5 text-[#0D3B26]" key="target" />,
    <Award className="w-5 h-5 text-[#D97706]" key="award" />,
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-24 bg-[#FBFDFB] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
            Por que treinar com o Ruberval
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Diferenciais de Ensino
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
            Tradição, dedicação e um método testado e comprovado ao longo de quase três décadas.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-4">
                  {icons[index]}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 text-[11px] font-semibold text-neutral-400">
                Ruberval · Fortaleza - CE
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
