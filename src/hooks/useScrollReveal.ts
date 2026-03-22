import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = el.querySelectorAll('.reveal, .reveal-left');
    elements.forEach((child) => observer.observe(child));
    // Also observe the element itself if it has the class
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
