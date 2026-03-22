import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Tracking', href: '/tracking' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg" style={{ background: 'hsla(213, 45%, 22%, 0.85)', borderBottom: '1px solid hsla(0, 0%, 100%, 0.08)' }}>
      <div className="container-custom flex h-16 items-center justify-between md:h-18">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'hsl(var(--primary))' }}>
            <span className="text-sm font-extrabold" style={{ color: 'hsl(var(--primary-foreground))' }}>LF</span>
          </span>
          LogisticsFlow
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-white'
              }`}
              style={location.pathname === link.href ? { background: 'hsla(0, 0%, 100%, 0.08)' } : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-3 text-sm">
            Request Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          style={{ background: 'hsla(0, 0%, 100%, 0.08)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t px-4 pb-6 pt-4 md:hidden" style={{ borderColor: 'hsla(0, 0%, 100%, 0.08)', background: 'hsla(213, 45%, 20%, 0.98)' }}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-white' : 'text-muted-foreground'
                }`}
                style={location.pathname === link.href ? { background: 'hsla(0, 0%, 100%, 0.08)' } : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 text-center text-sm">
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
