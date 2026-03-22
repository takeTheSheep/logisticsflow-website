import { useScrollReveal } from '@/hooks/useScrollReveal';
import { companyMission, operationalPhilosophy, companyStory, valuePillars, teamRoles } from '@/data/company';
import { aboutMetrics } from '@/data/metrics';
import { Eye, Shield, TrendingUp, MessageSquare, Briefcase } from 'lucide-react';

const pillarIcons = [
  <Eye className="h-6 w-6" key="eye" />,
  <Shield className="h-6 w-6" key="shield" />,
  <TrendingUp className="h-6 w-6" key="trend" />,
  <MessageSquare className="h-6 w-6" key="msg" />,
];

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="reveal text-4xl font-extrabold md:text-5xl">About LogisticsFlow</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-lg" style={{ transitionDelay: '80ms' }}>
            Built by operators, designed for execution quality.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="section-spacing">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          <div className="reveal panel">
            <h2 className="mb-3 text-xl font-bold">Mission</h2>
            <p>{companyMission}</p>
          </div>
          <div className="reveal panel" style={{ transitionDelay: '80ms' }}>
            <h2 className="mb-3 text-xl font-bold">Operational Philosophy</h2>
            <p>{operationalPhilosophy}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="reveal section-shell p-8 md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Our Story</h2>
            <p className="max-w-3xl text-base md:text-lg">{companyStory}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Operational Snapshot</h2>
            <p className="mt-3">Representative metrics from active coordination programs.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutMetrics.map((m, i) => (
              <div key={m.label} className="reveal panel text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl font-extrabold" style={{ color: 'hsl(var(--cyan-400))' }}>{m.value}</div>
                <div className="mt-1 text-sm font-semibold text-white">{m.label}</div>
                <p className="mt-1 text-xs">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Value Pillars</h2>
            <p className="mt-3">The principles guiding every lane strategy and client update.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((vp, i) => (
              <div key={vp.title} className="reveal panel" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                  {pillarIcons[i]}
                </div>
                <h3 className="text-base font-bold">{vp.title}</h3>
                <p className="mt-2 text-sm">{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Operational Team Roles</h2>
            <p className="mt-3">Clear ownership across the full shipment lifecycle.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamRoles.map((role, i) => (
              <div key={role.title} className="reveal panel" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'hsla(193, 100%, 73%, 0.1)', color: 'hsl(var(--cyan-400))' }}>
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold">{role.title}</h3>
                <p className="mt-2 text-sm">{role.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
