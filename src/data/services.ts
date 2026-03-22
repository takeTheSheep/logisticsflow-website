export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  icon: string;
  signal: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'freight-coordination',
    title: 'Freight Coordination',
    summary: 'Multi-leg transport planning with consistent SLA visibility.',
    icon: 'box',
    signal: 'SLA Protected',
    problem: 'Freight moves often break down between handoffs, causing timeline drift and missed communication windows.',
    solution: 'LogisticsFlow creates a single coordination lane across carriers, checkpoints, and account stakeholders so each handoff stays accountable.',
    benefits: [
      'Single operating view across carriers',
      'Escalation paths with defined response targets',
      'Predictable delivery windows for downstream teams',
    ],
    process: ['Request intake', 'Carrier planning', 'Exception monitoring', 'Performance review'],
  },
  {
    id: 'warehousing-fulfillment',
    title: 'Warehousing & Fulfillment',
    summary: 'Flexible storage and outbound dispatch for variable demand cycles.',
    icon: 'warehouse',
    signal: 'Hub Ready',
    problem: 'Growing teams outpace warehouse processes and lose control over outbound speed during high-volume periods.',
    solution: 'We combine inventory handling standards with staged fulfillment workflows to keep throughput consistent without overstaffing.',
    benefits: [
      'Faster dock-to-dispatch turnaround',
      'Clear batch and lot handling controls',
      'Capacity planning that adapts to seasonality',
    ],
    process: ['Inbound reception', 'Inventory handling', 'Order batching', 'Dispatch confirmation'],
  },
  {
    id: 'supply-chain-visibility',
    title: 'Supply Chain Visibility',
    summary: 'Live shipment context to reduce uncertainty and improve planning confidence.',
    icon: 'visibility',
    signal: 'Live Feed',
    problem: 'Operations teams spend too much time chasing status updates from fragmented systems.',
    solution: 'Our reporting layer consolidates shipment milestones into one stream with clear ownership and context.',
    benefits: [
      'Unified checkpoint updates',
      'Lower manual follow-up workload',
      'Earlier risk detection for planners',
    ],
    process: ['Data capture', 'Status normalization', 'Milestone alerts', 'Operations reporting'],
  },
  {
    id: 'route-planning',
    title: 'Route Planning',
    summary: 'Route strategy balancing time, cost, and reliability constraints.',
    icon: 'route',
    signal: 'Optimized',
    problem: 'Route choices are often made reactively, increasing cost and delivery volatility.',
    solution: 'We model route options against service-level targets and expected risk factors before dispatch.',
    benefits: [
      'Reduced avoidable delays',
      'Improved cost-to-service balance',
      'More reliable ETA commitments',
    ],
    process: ['Network assessment', 'Scenario planning', 'Dispatch guidance', 'Outcome tuning'],
  },
  {
    id: 'cross-border-support',
    title: 'Cross-Border Support',
    summary: 'Compliance-aware movement across customs and regional regulations.',
    icon: 'border',
    signal: 'Customs Aware',
    problem: 'Cross-border shipments stall when documentation and customs communication are not synchronized.',
    solution: 'We align shipment documentation and customs checkpoints with proactive exception handling.',
    benefits: [
      'Fewer customs-related delays',
      'Clear documentation checkpoints',
      'Improved confidence for international flows',
    ],
    process: ['Pre-clearance prep', 'Transit monitoring', 'Customs escalation', 'Release confirmation'],
  },
  {
    id: 'dedicated-account-support',
    title: 'Dedicated Account Communication',
    summary: 'Named logistics contacts with structured reporting and response cadences.',
    icon: 'support',
    signal: 'Response SLA',
    problem: 'Teams lose time when issue ownership is unclear and communication depends on generic inboxes.',
    solution: 'Every account receives dedicated communication lanes and recurring review cycles tied to KPIs.',
    benefits: [
      'Consistent response quality',
      'Faster decision loops for blockers',
      'Operational reporting stakeholders can trust',
    ],
    process: ['Onboarding', 'Cadence setup', 'Issue management', 'Quarterly optimization'],
  },
];
