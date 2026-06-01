"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Printer, FileText, RefreshCw, Clock, Box, Wallet, Users, Factory } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (prev.has(entry.target.id)) return prev;
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((prev) => prev !== entry.target.id ? entry.target.id : prev);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const getSectionClass = (id: string) => {
    const isVisible = visibleSections.has(id);
    return `transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`;
  };

  const navItems = ["hero", "benefits", "products"];

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden text-foreground selection:bg-neon-orange/30">
      
      {/* Side Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`w-[2px] transition-all duration-300 rounded-full ${
              activeSection === item ? "h-8 bg-accent" : "h-4 bg-foreground/20 hover:bg-foreground/50"
            }`}
            aria-label={`Navigate to ${item}`}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-32 pb-20">
        <div className={`max-w-7xl mx-auto w-full z-10 ${getSectionClass("hero")} flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
          <div className="flex-1 w-full">
            <div className="text-[10px] tracking-[0.2em] font-bold text-neon-orange uppercase mb-6 flex items-center gap-4">
              <span>01 // Инвестиции в будущее</span>
              <div className="h-px bg-neon-orange w-12" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-[-0.02em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-8 pb-4">
              5 000 ДОЛЛАРОВ
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-4xl text-muted mb-12">
              — цена квартиры на побережье Средиземного моря
            </p>
            
            <div className="p-8 md:p-12 border-l-2 border-accent bg-surface/50 backdrop-blur-md rounded-r-3xl w-full relative overflow-hidden group hover:bg-neon-orange/5 hover:border-neon-orange/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(246,96,35,0.15)]">
              <div className="w-16 h-1 bg-neon-orange absolute top-0 left-0 rounded-br-2xl" />
              <p className="text-xl md:text-3xl font-light leading-relaxed">
                Если Вы покупаете и сдаете в аренду оборудование совместно с компанией 
                <span className="text-foreground font-semibold mx-3">CULTFORM</span>, 
                реинвестируя свои доходы.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] xl:aspect-square rounded-3xl overflow-hidden border border-border group hover:border-neon-orange/30 transition-all duration-700 shadow-[0_0_40px_rgba(246,96,35,0.1)] hover:shadow-[0_0_60px_rgba(246,96,35,0.2)]">
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
               <div className="absolute inset-0 bg-neon-orange/10 group-hover:bg-transparent transition-all duration-700 z-10 mix-blend-overlay" />
               <Image 
                 src="/hero-bg-2.png" 
                 alt="Mediterranean coastal apartment" 
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
                 priority
               />
            </div>
          </div>
        </div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-orange/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="min-h-screen flex flex-col justify-center px-6 md:px-20 border-t border-dashed border-border relative py-24">
        <div className={`max-w-6xl mx-auto w-full z-10 ${getSectionClass("benefits")}`}>
          <div className="text-[10px] tracking-[0.2em] font-bold text-neon-purple uppercase mb-6 flex items-center gap-4">
            <span>02 // Условия</span>
            <div className="h-px bg-neon-purple w-12" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.02em] leading-none mb-16">
            Ваш доход <span className="text-neon-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue drop-shadow-[0_0_15px_rgba(115,109,245,0.5)]">6%</span> в месяц
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main large card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 p-8 md:p-10 border border-dashed border-border rounded-3xl bg-surface group hover:bg-neon-purple/5 hover:border-neon-purple/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(115,109,245,0.2)] relative">
              <div className="w-24 h-1 bg-neon-purple absolute top-0 left-0 rounded-tl-3xl rounded-br-2xl" />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="p-5 rounded-2xl bg-foreground/5 text-neon-purple shadow-[0_0_20px_rgba(115,109,245,0.2)]">
                  <Printer size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-foreground">Один 3D-принтер за $500</h3>
                  <p className="text-xl text-muted font-light leading-relaxed max-w-3xl">
                    Обеспечивает стабильный доход за счет реализации продукции по направлениям B2B и B2C на глобальном рынке.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="p-8 border border-border/50 rounded-3xl bg-surface/30 group hover:bg-neon-green/5 hover:border-neon-green/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(15,187,66,0.15)] relative">
              <div className="text-neon-green mb-6 drop-shadow-[0_0_10px_rgba(15,187,66,0.3)]"><Wallet size={32} /></div>
              <h3 className="text-xl font-semibold text-foreground">Ежемесячные выплаты без задержек</h3>
            </div>

            <div className="p-8 border border-border/50 rounded-3xl bg-surface/30 group hover:bg-neon-blue/5 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
              <div className="text-neon-blue mb-6 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"><FileText size={32} /></div>
              <h3 className="text-xl font-semibold text-foreground">Официальный договор аренды оборудования</h3>
            </div>

            <div className="p-8 border border-border/50 rounded-3xl bg-surface/30 group hover:bg-neon-orange/5 hover:border-neon-orange/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(246,96,35,0.15)] relative">
              <div className="text-neon-orange mb-6 drop-shadow-[0_0_10px_rgba(246,96,35,0.3)]"><RefreshCw size={32} /></div>
              <h3 className="text-xl font-semibold text-foreground">Кратный рост за счет возможности реинвестирования</h3>
            </div>

            <div className="p-8 border border-border/50 rounded-3xl bg-surface/30 group hover:bg-neon-yellow/5 hover:border-neon-yellow/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,194,0,0.15)] relative">
              <div className="text-neon-yellow mb-6 drop-shadow-[0_0_10px_rgba(255,194,0,0.3)]"><Clock size={32} /></div>
              <h3 className="text-xl font-semibold text-foreground">
                Срок контракта <br /> от 1 года до 5 лет
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="min-h-screen flex flex-col justify-center px-6 md:px-20 border-t border-dashed border-border relative py-24 overflow-hidden">
        <div className={`max-w-6xl mx-auto w-full z-10 ${getSectionClass("products")}`}>
          <div className="text-[10px] tracking-[0.2em] font-bold text-neon-green uppercase mb-6 flex items-center gap-4">
            <span>03 // Продукт для пользователей</span>
            <div className="h-px bg-neon-green w-12" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.02em] leading-none mb-16">
            Направления реализации
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <div className="p-10 border border-border/40 rounded-3xl bg-surface/40 group hover:bg-neon-blue/5 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden flex flex-col h-full">
              <div className="w-2 h-full bg-neon-blue absolute top-0 left-0" />
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-neon-blue/10 rounded-xl text-neon-blue">
                  <Factory size={28} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">B2B Сегмент</h3>
              </div>
              <p className="text-xl font-light text-muted mb-8 flex-grow">
                Производство комплектующих для бизнеса. Мы поставляем детали, необходимые для создания конечного продукта. Пример — 3D-печатные оправы для очков.
              </p>
              
              <div className="bg-background/80 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
                <div className="text-[10px] tracking-[0.2em] font-bold text-muted uppercase mb-4">Себестоимость — Реализация</div>
                <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
                  <span className="text-lg font-light">Себестоимость</span>
                  <span className="text-xl font-semibold text-foreground">$0.5 - $1</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-light">Продажа (оптика)</span>
                  <span className="text-xl font-semibold text-neon-blue">$10 - $30</span>
                </div>
              </div>
            </div>

            {/* B2C Card */}
            <div className="p-10 border border-border/40 rounded-3xl bg-surface/40 group hover:bg-neon-yellow/5 hover:border-neon-yellow/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,194,0,0.15)] relative overflow-hidden flex flex-col h-full">
              <div className="w-2 h-full bg-neon-yellow absolute top-0 left-0" />
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-neon-yellow/10 rounded-xl text-neon-yellow">
                  <Users size={28} />
                </div>
                <h3 className="text-3xl font-semibold text-foreground">B2C Сегмент</h3>
              </div>
              <p className="text-xl font-light text-muted mb-8 flex-grow">
                Производство дизайнерских изделий для повседневной жизни и эстетического оформления пространства.
              </p>
              
              <div className="bg-background/80 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
                <div className="text-[10px] tracking-[0.2em] font-bold text-muted uppercase mb-4">Себестоимость — Реализация</div>
                <div className="flex justify-between items-center py-3 border-b border-dashed border-border">
                  <span className="text-lg font-light">Набор (3 привидения)</span>
                  <span className="text-xl font-semibold text-foreground">$1.9</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-light">Розничная цена</span>
                  <span className="text-xl font-semibold text-neon-yellow">$3.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] -z-10" />
      </section>


      
    </main>
  );
}
