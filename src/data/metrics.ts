import type { MetricItem } from '@/types/content';

export const trustMetrics: MetricItem[] = [
  {
    label: 'On-time delivery rate',
    value: '98.4%',
    detail: 'Measured across coordinated lanes in the last 12 months.',
    target: 98.4,
    suffix: '%',
    decimals: 1,
  },
  {
    label: 'Countries served',
    value: '42',
    detail: 'Regional and cross-border freight execution coverage.',
    target: 42,
  },
  {
    label: 'Shipments monthly',
    value: '1200+',
    detail: 'Average monthly tracked freight movements across active lanes.',
    target: 1200,
    suffix: '+',
  },
  {
    label: 'Operations support',
    value: '24/7',
    detail: 'Continuous monitoring and exception response coverage.',
    target: 24,
    suffix: '/7',
  },
];

export const aboutMetrics: MetricItem[] = [
  {
    label: 'Annual shipments coordinated',
    value: '140K+',
    detail: 'Across retail, manufacturing, and commerce networks.',
  },
  {
    label: 'Average claim reduction',
    value: '27%',
    detail: 'After implementing visibility and checkpoint controls.',
  },
  {
    label: 'Client retention',
    value: '94%',
    detail: 'Built on long-term operational consistency and trust.',
  },
];
