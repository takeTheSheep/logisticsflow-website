import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Tracking', href: '/tracking' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'hsla(0, 0%, 100%, 0.08)', background: 'hsla(213, 50%, 14%, 0.6)' }}>
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'hsl(var(--primary))' }}>
                <span className="text-sm font-extrabold" style={{ color: 'hsl(var(--primary-foreground))' }}>LF</span>
              </span>
              LogisticsFlow
            </Link>
            <p className="max-w-xs text-sm">
              Precision freight coordination, shipment visibility, and operational discipline for modern supply chains.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <span>contact@logisticsflow.example</span>
              <span>ops-support@logisticsflow.example</span>
              <span>Amsterdam Operations Hub</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground md:flex-row" style={{ borderColor: 'hsla(0, 0%, 100%, 0.08)' }}>
          <span>&copy; {new Date().getFullYear()} LogisticsFlow. Demo project.</span>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link key={l.label} to={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
