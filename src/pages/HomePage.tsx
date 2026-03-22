import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { trustMetrics } from '@/data/metrics';
import { services } from '@/data/services';
import AnimatedCounter from '@/components/dashboard/AnimatedCounter';
import DashboardSection from '@/components/dashboard/DashboardSection';
import InteractiveGlobe from '@/components/dashboard/InteractiveGlobe';
import { Package, Warehouse, Eye, MapPin, Globe, Headphones, ArrowRight, CheckCircle2, Truck, BarChart3, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

const serviceIcons: Record<string, React.ReactNode> = {
  box: <Package className="h-6 w-6" />,
  warehouse: <Warehouse className="h-6 w-6" />,
  visibility: <Eye className="h-6 w-6" />,
  route: <MapPin className="h-6 w-6" />,
  border: <Globe className="h-6 w-6" />,
  support: <Headphones className="h-6 w-6" />,
};

const processSteps = [
  { icon: <Package className="h-7 w-7" />, title: 'Request & Planning', desc: 'Define shipment requirements and select optimal lanes.' },
  { icon: <Truck className="h-7 w-7" />, title: 'Dispatch & Transit', desc: 'Carrier coordination with milestone-level updates.' },
  { icon: <Eye className="h-7 w-7" />, title: 'Monitoring & Alerts', desc: 'Real-time visibility with proactive exception handling.' },
  { icon: <CheckCircle2 className="h-7 w-7" />, title: 'Delivery & Review', desc: 'Confirmed delivery with performance reporting.' },
];

const industries = [
  { icon: <Package className="h-6 w-6" />, name: 'Retail & E-Commerce' },
  { icon: <BarChart3 className="h-6 w-6" />, name: 'Manufacturing' },
  { icon: <Shield className="h-6 w-6" />, name: 'Pharmaceuticals' },
  { icon: <Globe className="h-6 w-6" />, name: 'Automotive' },
  { icon: <Clock className="h-6 w-6" />, name: 'Perishable Goods' },
  { icon: <Warehouse className="h-6 w-6" />, name: 'Consumer Electronics' },
];

// Parse metric values for counter animation
function parseMetricValue(value: string): { num: number; suffix: string; prefix: string; decimals: number } {
  const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)/);
  if (!match) return { num: 0, suffix: '', prefix: '', decimals: 0 };
  const prefix = match[1] || '';
  const numStr = match[2].replace(/,/g, '');
  const suffix = match[3] || '';
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { num: parseFloat(numStr), suffix, prefix, decimals };
}

export default function HomePage() {
  const revealRef = useScrollReveal();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium" style={{ borderColor: 'hsla(193, 100%, 73%, 0.3)', background: 'hsla(193, 100%, 73%, 0.08)', color: 'hsl(var(--cyan-300))' }}>
              <span className="h-1.5 w-1.5 rounded-full status-pulse" style={{ background: 'hsl(var(--cyan-400))' }} />
              Live Platform Preview
            </div>
            <h1 className="reveal text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl" style={{ transitionDelay: '80ms' }}>
              Explore a live logistics{' '}
              <span className="hero-gradient-text">platform preview</span>
            </h1>
            <p className="reveal mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl" style={{ transitionDelay: '160ms' }}>
              LogisticsFlow demonstrates shipment visibility, operations intelligence, and UI state systems through interactive product modules.
            </p>
            <div className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row" style={{ transitionDelay: '240ms' }}>
              <Link to="/contact" className="btn-primary text-base">
                Request Quote
              </Link>
              <Link to="/tracking" className="btn-secondary text-base">
                Track Shipment
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${6 + i * 1.5}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Trust Metrics with Animated Counters */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {trustMetrics.map((m, i) => {
              const parsed = parseMetricValue(m.value);
              return (
                <div key={m.label} className="reveal metric-card panel text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-2xl font-extrabold md:text-3xl" style={{ color: 'hsl(var(--cyan-400))' }}>
                    <AnimatedCounter
                      end={parsed.num}
                      suffix={parsed.suffix}
                      prefix={parsed.prefix}
                      decimals={parsed.decimals}
                      duration={2200 + i * 200}
                    />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">{m.label}</div>
                  <p className="mt-1 hidden text-xs md:block">{m.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard */}
      <DashboardSection />

      {/* Live Route Monitor */}
      <InteractiveGlobe />

      {/* Services Overview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Core Services</h2>
            <p className="mx-auto mt-3 max-w-xl">End-to-end logistics capabilities built for reliability and scale.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                to={`/services#${s.id}`}
                key={s.id}
                className="reveal group panel service-card flex flex-col gap-4"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="service-icon flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                    {serviceIcons[s.icon]}
                  </div>
                  <span className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-300))' }}>
                    {s.signal}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2 group-hover:text-white" style={{ color: 'hsl(var(--cyan-400))' }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Interactive */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mx-auto mt-3 max-w-xl">From request to delivery, every step is tracked and accountable. Click a step to explore.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(isActive ? null : i)}
                  className="reveal panel process-step relative text-center transition-all duration-500"
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    borderColor: isActive ? 'hsla(193, 100%, 73%, 0.4)' : undefined,
                    boxShadow: isActive ? '0 16px 40px -16px hsla(193, 85%, 60%, 0.3)' : undefined,
                    transform: isActive ? 'translateY(-4px)' : undefined,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-xs font-bold transition-all duration-300" style={{
                    background: isActive ? 'hsl(var(--cyan-400))' : 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                    transform: isActive ? 'scale(1.1)' : undefined,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mx-auto mt-4 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500" style={{
                    background: isActive ? 'hsla(193, 100%, 73%, 0.2)' : 'hsla(193, 100%, 73%, 0.1)',
                    color: 'hsl(var(--cyan-400))',
                    transform: isActive ? 'scale(1.1) rotate(6deg)' : undefined,
                  }}>
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm">{step.desc}</p>

                  {/* Expanded detail on click */}
                  <div className="overflow-hidden transition-all duration-500" style={{
                    maxHeight: isActive ? '80px' : '0px',
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? '12px' : '0px',
                  }}>
                    <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'hsla(193, 100%, 73%, 0.08)', color: 'hsl(var(--cyan-300))' }}>
                      {['Avg. setup time: 12 min', 'Transit visibility: 99.2%', 'Alert response: < 4 min', 'Report delivery: < 1 hour'][i]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-3 max-w-xl">Freight expertise adapted to sector-specific requirements.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <div key={ind.name} className="reveal panel industry-card flex flex-col items-center gap-3 py-6 text-center transition-all duration-500 hover:border-cyan-400/30" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="transition-transform duration-500 hover:scale-125 hover:rotate-12" style={{ color: 'hsl(var(--cyan-400))' }}>{ind.icon}</div>
                <span className="text-sm font-semibold text-white">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal section-shell cta-section p-8 text-center md:p-16">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to optimize your logistics?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base md:text-lg">
              Let us evaluate your freight setup and recommend execution improvements tailored to your shipment profile.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary text-base">Book Consultation</Link>
              <Link to="/tracking" className="btn-secondary text-base">Try Live Tracking</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
