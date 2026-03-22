import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';
import { Package, Warehouse, Eye, MapPin, Globe, Headphones, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const serviceIcons: Record<string, React.ReactNode> = {
  box: <Package className="h-7 w-7" />,
  warehouse: <Warehouse className="h-7 w-7" />,
  visibility: <Eye className="h-7 w-7" />,
  route: <MapPin className="h-7 w-7" />,
  border: <Globe className="h-7 w-7" />,
  support: <Headphones className="h-7 w-7" />,
};

export default function ServicesPage() {
  const revealRef = useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div ref={revealRef}>
      {/* Page Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="reveal text-4xl font-extrabold md:text-5xl">Our Services</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-lg" style={{ transitionDelay: '80ms' }}>
            Full-spectrum logistics execution from freight coordination to cross-border compliance.
          </p>
          {/* Quick nav pills */}
          <div className="reveal mt-8 flex flex-wrap justify-center gap-2" style={{ transitionDelay: '160ms' }}>
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-white" style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)', background: 'hsla(0, 0%, 100%, 0.05)' }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-spacing">
        <div className="container-custom space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="reveal scroll-mt-24" style={{ transitionDelay: '0ms' }}>
              <div className="section-shell overflow-hidden">
                <div className="grid gap-0 md:grid-cols-5">
                  {/* Left info */}
                  <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                        {serviceIcons[s.icon]}
                      </div>
                      <span className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider status-pulse" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-300))' }}>
                        {s.signal}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold md:text-3xl">{s.title}</h2>
                    <p className="mt-3">{s.summary}</p>
                  </div>

                  {/* Right detail */}
                  <div className="border-t p-6 md:col-span-3 md:border-t-0 md:border-l md:p-10" style={{ borderColor: 'hsla(0, 0%, 100%, 0.1)' }}>
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/60">The Problem</h3>
                      <p className="text-sm">{s.problem}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/60">Our Solution</h3>
                      <p className="text-sm">{s.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/60">Key Benefits</h3>
                      <ul className="space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'hsl(var(--cyan-400))' }} />
                            <span className="text-muted-foreground">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">Process</h3>
                      <div className="flex flex-wrap gap-2">
                        {s.process.map((p, pi) => (
                          <span key={p} className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground" style={{ borderColor: 'hsla(0, 0%, 100%, 0.12)' }}>
                            <span className="text-[10px] font-bold" style={{ color: 'hsl(var(--cyan-400))' }}>{String(pi + 1).padStart(2, '0')}</span>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal section-shell p-8 text-center md:p-16">
            <h2 className="text-3xl font-bold md:text-4xl">Request a logistics consultation</h2>
            <p className="mx-auto mt-4 max-w-lg">
              Let us evaluate your freight setup and recommend execution improvements tailored to your shipment profile.
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex text-base">Book Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
