import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { trustMetrics } from '@/data/metrics';
import { services } from '@/data/services';
import { Package, Warehouse, Eye, MapPin, Globe, Headphones, ArrowRight, CheckCircle2, Truck, BarChart3, Shield, Clock } from 'lucide-react';

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

export default function HomePage() {
  const revealRef = useScrollReveal();

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
              <span style={{ color: 'hsl(var(--cyan-400))' }}>platform preview</span>
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
      </section>

      {/* Trust Metrics */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {trustMetrics.map((m, i) => (
              <div key={m.label} className="reveal panel text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-2xl font-extrabold md:text-3xl" style={{ color: 'hsl(var(--cyan-400))' }}>{m.value}</div>
                <div className="mt-1 text-sm font-semibold text-white">{m.label}</div>
                <p className="mt-1 hidden text-xs md:block">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="reveal group panel flex flex-col gap-4 transition-all duration-300 hover:border-cyan-500/30"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                    {serviceIcons[s.icon]}
                  </div>
                  <span className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-300))' }}>
                    {s.signal}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium transition-colors group-hover:text-white" style={{ color: 'hsl(var(--cyan-400))' }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mx-auto mt-3 max-w-xl">From request to delivery, every step is tracked and accountable.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="reveal panel relative text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-xs font-bold" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mx-auto mt-4 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                  {step.icon}
                </div>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm">{step.desc}</p>
              </div>
            ))}
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
              <div key={ind.name} className="reveal panel flex flex-col items-center gap-3 py-6 text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{ color: 'hsl(var(--cyan-400))' }}>{ind.icon}</div>
                <span className="text-sm font-semibold text-white">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal section-shell p-8 text-center md:p-16">
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
