import { useState } from 'react';

const routes = [
  { from: 'Rotterdam', to: 'Hamburg', status: 'active' as const, delay: '0s' },
  { from: 'Barcelona', to: 'Milan', status: 'active' as const, delay: '0.5s' },
  { from: 'Gdansk', to: 'Prague', status: 'delayed' as const, delay: '1s' },
  { from: 'Lisbon', to: 'Paris', status: 'active' as const, delay: '1.5s' },
  { from: 'Istanbul', to: 'Vienna', status: 'active' as const, delay: '2s' },
];

export default function InteractiveGlobe() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="reveal mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Live Route Monitor</h2>
          <p className="mx-auto mt-3 max-w-xl">Click any route to inspect real-time status and corridor details.</p>
        </div>

        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => {
            const isSelected = selected === i;
            const isActive = route.status === 'active';
            return (
              <button
                key={i}
                onClick={() => setSelected(isSelected ? null : i)}
                className="panel group relative overflow-hidden text-left transition-all duration-500"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderColor: isSelected
                    ? isActive ? 'hsla(193, 100%, 73%, 0.5)' : 'hsla(40, 100%, 60%, 0.5)'
                    : undefined,
                  boxShadow: isSelected
                    ? isActive
                      ? '0 16px 40px -16px hsla(193, 85%, 60%, 0.3)'
                      : '0 16px 40px -16px hsla(40, 100%, 50%, 0.25)'
                    : undefined,
                }}
              >
                {/* Animated pulse line */}
                <div
                  className="absolute top-0 left-0 h-0.5 w-full"
                  style={{
                    background: isActive
                      ? 'linear-gradient(90deg, transparent, hsl(193, 100%, 73%), transparent)'
                      : 'linear-gradient(90deg, transparent, hsl(40, 100%, 60%), transparent)',
                    animation: `slideLine 3s ease-in-out infinite`,
                    animationDelay: route.delay,
                  }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: isActive ? 'hsl(160, 60%, 55%)' : 'hsl(40, 100%, 60%)',
                        boxShadow: isActive
                          ? '0 0 8px hsla(160, 60%, 55%, 0.5)'
                          : '0 0 8px hsla(40, 100%, 60%, 0.5)',
                      }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: isActive ? 'hsl(160, 60%, 65%)' : 'hsl(40, 100%, 70%)' }}>
                      {route.status}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-base font-bold text-white">{route.from} → {route.to}</p>
                </div>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isSelected ? '120px' : '0px',
                    opacity: isSelected ? 1 : 0,
                    marginTop: isSelected ? '12px' : '0px',
                  }}
                >
                  <div className="space-y-1.5 text-sm" style={{ color: 'hsl(210, 20%, 70%)' }}>
                    <p>ETA: {isActive ? '2h 45m' : '4h 10m (revised)'}</p>
                    <p>Carrier: FreightNet #{(1200 + i * 37)}</p>
                    <p>Load: {['FTL', 'LTL', 'FTL', 'LTL', 'FTL'][i]} · {[18, 12, 24, 8, 20][i]}t</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
