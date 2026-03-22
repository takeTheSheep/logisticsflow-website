import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { faqs } from '@/data/company';
import { services } from '@/data/services';
import { Send, Mail, Clock, MapPin, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={revealRef}>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="reveal text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="reveal mx-auto mt-4 max-w-2xl text-lg" style={{ transitionDelay: '80ms' }}>
            Ready to discuss your logistics needs? Reach out and we'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="reveal lg:col-span-3">
              <div className="section-shell p-6 md:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: 'hsla(140, 70%, 55%, 0.1)' }}>
                      <Send className="h-7 w-7" style={{ color: 'hsl(140, 70%, 55%)' }} />
                    </div>
                    <h3 className="text-xl font-bold">Message Sent</h3>
                    <p className="mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-white">Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-11 w-full rounded-xl border bg-transparent px-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-white">Email *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-11 w-full rounded-xl border bg-transparent px-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-11 w-full rounded-xl border bg-transparent px-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white">Service Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="h-11 w-full rounded-xl border bg-transparent px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-ring"
                        style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                      >
                        <option value="" style={{ background: 'hsl(213, 45%, 22%)' }}>Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id} style={{ background: 'hsl(213, 45%, 22%)' }}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        style={{ borderColor: 'hsla(0, 0%, 100%, 0.15)' }}
                        placeholder="Tell us about your logistics requirements..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-base sm:w-auto">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              <div className="reveal panel" style={{ transitionDelay: '80ms' }}>
                <h3 className="mb-4 text-lg font-bold">Availability</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" style={{ color: 'hsl(var(--cyan-400))' }} />
                    <span className="text-muted-foreground">Monday–Friday, 08:00–19:00 CET</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" style={{ color: 'hsl(var(--cyan-400))' }} />
                    <span className="text-muted-foreground">contact@logisticsflow.example</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" style={{ color: 'hsl(var(--cyan-400))' }} />
                    <span className="text-muted-foreground">ops-support@logisticsflow.example</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color: 'hsl(var(--cyan-400))' }} />
                    <span className="text-muted-foreground">Amsterdam Operations Hub</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="reveal panel" style={{ transitionDelay: '160ms' }}>
                <h3 className="mb-4 text-lg font-bold">Frequently Asked</h3>
                <div className="space-y-0 divide-y" style={{ borderColor: 'hsla(0, 0%, 100%, 0.08)' }}>
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-white/8" style={{ borderColor: 'hsla(0, 0%, 100%, 0.08)' }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-medium text-white transition-colors hover:text-cyan-300"
                      >
                        {faq.question}
                        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <p className="pb-3 text-sm text-muted-foreground animate-fade-up">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
