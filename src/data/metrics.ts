export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export const trustMetrics: MetricItem[] = [
  { label: 'On-time delivery rate', value: '98.4%', detail: 'Measured across coordinated lanes in the last 12 months.' },
  { label: 'Countries served', value: '42', detail: 'Regional and cross-border freight execution coverage.' },
  { label: 'Shipments monthly', value: '1,200+', detail: 'Average monthly tracked freight movements across active lanes.' },
  { label: 'Operations support', value: '24/7', detail: 'Continuous monitoring and exception response coverage.' },
];

export const aboutMetrics: MetricItem[] = [
  { label: 'Annual shipments coordinated', value: '140K+', detail: 'Across retail, manufacturing, and commerce networks.' },
  { label: 'Average claim reduction', value: '27%', detail: 'After implementing visibility and checkpoint controls.' },
  { label: 'Client retention', value: '94%', detail: 'Built on long-term operational consistency and trust.' },
];
