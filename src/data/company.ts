export const companyMission =
  'To give operations teams full control over freight execution through clear visibility, disciplined coordination, and dependable communication.';

export const operationalPhilosophy =
  'We treat logistics as a business-critical operating system. Every route decision, checkpoint update, and escalation path should protect your delivery commitments.';

export const companyStory =
  'LogisticsFlow was built by operators who had to manage freight under pressure. We saw how fragmented updates and reactive planning hurt business outcomes, and built a service model focused on execution quality, not just shipment volume.';

export interface ValuePillar {
  title: string;
  description: string;
}

export const valuePillars: ValuePillar[] = [
  {
    title: 'Real-Time Visibility',
    description: 'Milestone-level transparency across shipment stages so teams can act early instead of reacting late.',
  },
  {
    title: 'Reliable Delivery Execution',
    description: 'Operational discipline across route planning, dispatch controls, and exception management.',
  },
  {
    title: 'Scalable Operations',
    description: 'Processes designed to support growth without sacrificing delivery quality or communication standards.',
  },
  {
    title: 'Clear Communication',
    description: 'Structured updates and named ownership to keep clients informed and aligned at every stage.',
  },
];

export const teamRoles = [
  { title: 'Operations Strategy', detail: 'Defines service lanes, performance targets, and escalation structures.' },
  { title: 'Route Coordination', detail: 'Owns dispatch sequencing, handoff quality, and route-level issue response.' },
  { title: 'Warehouse Support', detail: 'Maintains throughput controls for inbound handling and outbound readiness.' },
  { title: 'Client Communication', detail: 'Runs reporting cadence, exception updates, and stakeholder alignment.' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Can LogisticsFlow integrate with our existing TMS or ERP stack?',
    answer: 'Yes. The delivery model is structured around integration readiness. We can map status workflows and data touchpoints to your existing systems as part of onboarding.',
  },
  {
    question: 'How quickly can we launch a new shipping lane?',
    answer: 'Most lanes can move from planning to live coordination in 2-4 weeks, depending on carrier complexity and compliance requirements.',
  },
  {
    question: 'Do you provide support for exception-heavy routes?',
    answer: 'Yes. We apply stricter milestone monitoring and escalation protocols on lanes with elevated delay risk or customs complexity.',
  },
];
