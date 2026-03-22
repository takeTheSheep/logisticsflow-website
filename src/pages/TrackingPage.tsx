import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { validateTrackingCode, normalizeTrackingCode, getTrackingRecord, sampleCodes, type TrackingRecord } from '@/data/tracking';
import { Search, Package, MapPin, Truck, CheckCircle2, AlertTriangle, Clock, Info } from 'lucide-react';

const statusConfig: Record<string, { color: string; bg: string; icon: React.ReactNode; label: string }> = {
  'in-transit': { color: 'hsl(var(--cyan-400))', bg: 'hsla(193, 100%, 73%, 0.1)', icon: <Truck className="h-4 w-4" />, label: 'In Transit' },
  delivered: { color: 'hsl(140, 70%, 55%)', bg: 'hsla(140, 70%, 55%, 0.1)', icon: <CheckCircle2 className="h-4 w-4" />, label: 'Delivered' },
  pending: { color: 'hsl(40, 90%, 55%)', bg: 'hsla(40, 90%, 55%, 0.1)', icon: <Clock className="h-4 w-4" />, label: 'Pending' },
  exception: { color: 'hsl(0, 72%, 55%)', bg: 'hsla(0, 72%, 55%, 0.1)', icon: <AlertTriangle className="h-4 w-4" />, label: 'Exception' },
};

export default function TrackingPage() {
  const revealRef = useScrollReveal();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [record, setRecord] = useState<TrackingRecord | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setRecord(null);

    const normalized = normalizeTrackingCode(code);
    setCode(normalized);

    if (!validateTrackingCode(normalized)) {
      setError('Enter a valid tracking code format like LF-48291.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const r = getTrackingRecord(normalized);
      if (r) {
        setRecord(r);
      } else {
        setError('Tracking code not found in demo records. Try one of the sample codes.');
      }
      setLoading(false);
    }, 800);
  };

  const sc = record ? statusConfig[record.status] : null;

  return (
    <div ref={revealRef}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="reveal text-4xl font-extrabold md:text-5xl">Track Shipment</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-lg" style={{ transitionDelay: '80ms' }}>
            Enter your tracking code to view real-time shipment status and timeline.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-2xl">
          {/* Search Form */}
          <form onSubmit={handleSubmit} className="reveal">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter tracking code (e.g. LF-48291)"
                  className="h-12 w-full rounded-xl border bg-transparent pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2"
                  style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                />
              </div>
              <button type="submit" className="btn-primary h-12 px-6" disabled={loading}>
                {loading ? 'Searching...' : 'Track'}
              </button>
            </div>
            {error && (
              <div className="mt-3 flex items-center gap-2 rounded-lg p-3 text-sm" style={{ background: 'hsla(0, 72%, 55%, 0.1)', color: 'hsl(0, 72%, 65%)' }}>
                <AlertTriangle className="h-4 w-4 flex-shrink-0" /> {error}
              </div>
            )}
          </form>

          {/* Sample codes */}
          <div className="reveal mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground" style={{ transitionDelay: '80ms' }}>
            <Info className="h-3.5 w-3.5" /> Try:
            {sampleCodes.map((sc) => (
              <button
                key={sc}
                onClick={() => { setCode(sc); setError(''); setRecord(null); }}
                className="rounded-md border px-2 py-1 font-mono transition-colors hover:text-white"
                style={{ borderColor: 'hsla(0, 0%, 100%, 0.12)' }}
              >
                {sc}
              </button>
            ))}
          </div>

          {/* Result */}
          {record && sc && (
            <div className="mt-8 space-y-6 animate-fade-up">
              {/* Header card */}
              <div className="section-shell p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Tracking Code</div>
                    <div className="font-mono text-xl font-bold text-white">{record.code}</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold" style={{ background: sc.bg, color: sc.color }}>
                    {sc.icon} {sc.label}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Origin</div>
                    <div className="mt-0.5 flex items-center gap-1 text-sm font-medium text-white">
                      <MapPin className="h-3.5 w-3.5" style={{ color: sc.color }} /> {record.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Destination</div>
                    <div className="mt-0.5 flex items-center gap-1 text-sm font-medium text-white">
                      <MapPin className="h-3.5 w-3.5" style={{ color: sc.color }} /> {record.destination}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Carrier</div>
                    <div className="mt-0.5 text-sm font-medium text-white">{record.carrier}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ETA</div>
                    <div className="mt-0.5 text-sm font-medium text-white">{record.eta}</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="section-shell p-6">
                <h3 className="mb-5 text-lg font-bold">Shipment Timeline</h3>
                <div className="space-y-0">
                  {record.events.map((ev, i) => (
                    <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                      {/* Line */}
                      {i < record.events.length - 1 && (
                        <div className="absolute left-[11px] top-6 bottom-0 w-px" style={{ background: 'hsla(0, 0%, 100%, 0.1)' }} />
                      )}
                      {/* Dot */}
                      <div className="relative z-10 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full" style={{ background: i === record.events.length - 1 ? sc.bg : 'hsla(0, 0%, 100%, 0.08)', border: `1px solid ${i === record.events.length - 1 ? sc.color : 'hsla(0, 0%, 100%, 0.15)'}` }}>
                        <div className="h-2 w-2 rounded-full" style={{ background: i === record.events.length - 1 ? sc.color : 'hsla(0, 0%, 100%, 0.4)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-sm font-semibold text-white">{ev.status}</span>
                          <span className="text-xs text-muted-foreground">{ev.location}</span>
                        </div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{ev.timestamp}</div>
                        <p className="mt-1 text-sm">{ev.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integration note */}
          <div className="reveal mt-12 panel text-center text-sm" style={{ transitionDelay: '0ms' }}>
            <p className="text-muted-foreground">
              <strong className="text-white">Integration boundary:</strong> Tracking data is sourced from a local mock module for this demo. The form and lookup logic are isolated for easy API endpoint replacement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
