import type {
  ArchitectureLayerItem,
  BarChartItem,
  CapabilityItem,
  DeveloperFeatureItem,
  FeatureModuleItem,
  LineChartPoint,
  MapShipmentItem,
  OperationMetricItem,
  OperationRowItem,
  PieChartSlice,
  SystemHealthItem,
  TechStackItem,
  WorkflowStepItem,
} from '@/types/content';

export const techStackItems: TechStackItem[] = [
  {
    title: 'Astro',
    description: 'Static-first delivery with selective client-side hydration for fast page loads.',
    icon: 'astro',
  },
  {
    title: 'TypeScript',
    description: 'Strongly typed data flows for safer tracking logic, forms, and reusable UI modules.',
    icon: 'typescript',
  },
  {
    title: 'TailwindCSS',
    description: 'Token-driven utility styling for consistent spacing, states, and visual hierarchy.',
    icon: 'tailwind',
  },
  {
    title: 'Component Architecture',
    description: 'Modular sections and domain components separated by feature responsibility.',
    icon: 'components',
  },
  {
    title: 'Static-first Rendering',
    description: 'Content and layout ship as pre-rendered HTML with lightweight enhancement scripts.',
    icon: 'static',
  },
  {
    title: 'Performance Optimization',
    description: 'Minimal JS payloads, semantic markup, and predictable rendering behavior.',
    icon: 'performance',
  },
  {
    title: 'SEO-ready Structure',
    description: 'Per-page metadata, clean hierarchy, canonical tags, robots, and sitemap integration.',
    icon: 'seo',
  },
];

export const platformCapabilities: CapabilityItem[] = [
  {
    title: 'Real-time shipment visibility',
    description: 'Track shipments across routes and hubs instantly with milestone-level context.',
    icon: 'visibility',
  },
  {
    title: 'Route optimization',
    description: 'Plan efficient transport routes across regions with reliability and cost balance.',
    icon: 'route',
  },
  {
    title: 'Warehouse coordination',
    description: 'Centralized shipment storage and handoff operations from inbound to dispatch.',
    icon: 'warehouse',
  },
  {
    title: 'Delivery status monitoring',
    description: 'Operational status and SLA progress across the shipment lifecycle in one feed.',
    icon: 'monitoring',
  },
  {
    title: 'Cross-border logistics',
    description: 'International lane support with customs-aware checkpoints and exception paths.',
    icon: 'border',
  },
  {
    title: 'API-ready infrastructure',
    description: 'Prepared for ERP, CRM, and shipment API integration without UI rewrites.',
    icon: 'api',
  },
];

export const operationsMetrics: OperationMetricItem[] = [
  {
    title: 'Active Shipments',
    value: '24',
    detail: 'Current lanes with open milestones.',
    icon: 'dashboard',
  },
  {
    title: 'In Transit',
    value: '18',
    detail: 'Loads currently moving between checkpoints.',
    icon: 'route',
  },
  {
    title: 'Delivered',
    value: '5',
    detail: 'Completed shipments in current cycle.',
    icon: 'visibility',
  },
  {
    title: 'Delayed',
    value: '1',
    detail: 'Exception flagged shipment requiring attention.',
    icon: 'support',
  },
];

export const operationsRows: OperationRowItem[] = [
  {
    shipmentId: 'LF-48291',
    route: 'Hamburg -> Amsterdam',
    status: 'In Transit',
    eta: 'Mar 11, 2:00 PM',
  },
  {
    shipmentId: 'LF-18394',
    route: 'Berlin -> Cologne',
    status: 'Delivered',
    eta: 'Mar 9, 10:20 AM',
  },
  {
    shipmentId: 'LF-77354',
    route: 'Warsaw -> Paris',
    status: 'Delayed',
    eta: 'Mar 12, 6:00 PM',
  },
];

export const mapShipments: MapShipmentItem[] = [
  {
    id: 'LF-48291',
    origin: 'Hamburg',
    destination: 'Amsterdam',
    status: 'In Transit',
    path: {
      start: { x: 350, y: 154 },
      control: { x: 320, y: 175 },
      end: { x: 296, y: 190 },
    },
    marker: { x: 322, y: 172 },
  },
  {
    id: 'LF-18394',
    origin: 'Berlin',
    destination: 'Cologne',
    status: 'Delivered',
    path: {
      start: { x: 398, y: 164 },
      control: { x: 360, y: 184 },
      end: { x: 328, y: 203 },
    },
    marker: { x: 331, y: 201 },
  },
  {
    id: 'LF-77354',
    origin: 'Warsaw',
    destination: 'Paris',
    status: 'Delayed',
    path: {
      start: { x: 482, y: 162 },
      control: { x: 392, y: 175 },
      end: { x: 254, y: 216 },
    },
    marker: { x: 386, y: 176 },
  },
  {
    id: 'LF-19420',
    origin: 'Rotterdam',
    destination: 'Brussels',
    status: 'Arrived at Hub',
    path: {
      start: { x: 286, y: 182 },
      control: { x: 298, y: 197 },
      end: { x: 312, y: 214 },
    },
    marker: { x: 300, y: 198 },
  },
];

export const systemHealthItems: SystemHealthItem[] = [
  { name: 'Tracking API', status: 'Online', level: 'good' },
  { name: 'Route Engine', status: 'Operational', level: 'good' },
  { name: 'Warehouse Sync', status: 'Active', level: 'warn' },
  { name: 'Notification System', status: 'Running', level: 'good' },
  { name: 'Customs Feed', status: 'Delayed', level: 'critical' },
];

export const featureModules: FeatureModuleItem[] = [
  {
    title: 'Shipment Tracking Engine',
    description: 'Normalizes IDs, records milestones, and renders delivery state context.',
    icon: 'engine',
    handles: ['ID normalization', 'Status timeline generation', 'Exception state handling'],
  },
  {
    title: 'Route Optimization System',
    description: 'Evaluates route scenarios against SLA and operational cost constraints.',
    icon: 'route',
    handles: ['Lane strategy scoring', 'Transit variance checks', 'Dispatch recommendation'],
  },
  {
    title: 'Warehouse Coordination Layer',
    description: 'Synchronizes inbound, storage, batching, and dispatch readiness checkpoints.',
    icon: 'warehouse',
    handles: ['Dock capacity signal', 'Batch staging events', 'Outbound readiness validation'],
  },
  {
    title: 'Notification & Alert System',
    description: 'Streams milestone and exception updates to relevant operational roles.',
    icon: 'notification',
    handles: ['SLA breach warnings', 'Delay escalation notes', 'Stakeholder update cadence'],
  },
  {
    title: 'Delivery Status Monitoring',
    description: 'Monitors shipment movement health across hubs and final-mile steps.',
    icon: 'monitoring',
    handles: ['Hub checkpoint polling', 'Last-mile handoff state', 'Risk visibility indicators'],
  },
  {
    title: 'Logistics Analytics Layer',
    description: 'Converts shipment events into actionable performance and reliability insights.',
    icon: 'analytics',
    handles: ['Throughput trends', 'Route efficiency metrics', 'Service reliability reports'],
  },
];

export const workflowSteps: WorkflowStepItem[] = [
  {
    title: 'Client Request',
    description: 'Shipment requirements, lanes, and SLA priorities are captured.',
    icon: 'request',
  },
  {
    title: 'Route Planning',
    description: 'Route options are validated against timing and operational constraints.',
    icon: 'route',
  },
  {
    title: 'Shipment Dispatch',
    description: 'Execution begins with active monitoring and checkpoint ownership.',
    icon: 'box',
  },
  {
    title: 'Warehouse Processing',
    description: 'Inbound, staging, and outbound readiness are synchronized.',
    icon: 'warehouse',
  },
  {
    title: 'Delivery Execution',
    description: 'Final transit milestones are tracked through destination confirmation.',
    icon: 'visibility',
  },
  {
    title: 'Status Updates',
    description: 'Operational and stakeholder updates are streamed in real time.',
    icon: 'notification',
  },
];

export const developerFeatures: DeveloperFeatureItem[] = [
  {
    title: 'Performance Optimized',
    description: 'Static-first rendering keeps initial loads fast while preserving interactivity.',
    icon: 'performance',
  },
  {
    title: 'Modular Component System',
    description: 'Reusable Astro components are separated by domain and feature responsibility.',
    icon: 'components',
  },
  {
    title: 'Type-safe Codebase',
    description: 'TypeScript models enforce safer contracts across UI, data, and interactions.',
    icon: 'typescript',
  },
  {
    title: 'Integration Ready',
    description: 'Clear boundaries for replacing mock datasets with API, ERP, or CRM services.',
    icon: 'integration',
  },
  {
    title: 'Clean Architecture',
    description: 'Data, validation, and presentation logic remain isolated and extensible.',
    icon: 'frontend',
  },
];

export const monthlyShipmentsSeries: LineChartPoint[] = [
  { label: 'Jan', value: 860 },
  { label: 'Feb', value: 920 },
  { label: 'Mar', value: 980 },
  { label: 'Apr', value: 1035 },
  { label: 'May', value: 1120 },
  { label: 'Jun', value: 1210 },
];

export const deliverySuccessRate = 98.4;

export const shipmentTypeSlices: PieChartSlice[] = [
  { label: 'Freight', value: 46, color: '#9be7ff' },
  { label: 'Express', value: 24, color: '#a8d8ff' },
  { label: 'Cross-border', value: 18, color: '#9ef4d8' },
  { label: 'Warehousing', value: 12, color: '#c1b8ff' },
];

export const routeEfficiencyBars: BarChartItem[] = [
  { label: 'North Sea', value: 92 },
  { label: 'Central EU', value: 88 },
  { label: 'Baltic', value: 79 },
  { label: 'Iberia', value: 83 },
];

export const architectureLayers: ArchitectureLayerItem[] = [
  {
    title: 'Frontend Layer',
    stack: 'Astro + TypeScript UI',
    description: 'Composable UI sections, semantic markup, and interactive modules for core journeys.',
    icon: 'frontend',
  },
  {
    title: 'Tracking Engine',
    stack: 'Lookup + Validation Logic',
    description: 'Tracking code normalization, schema-safe lookup, and status/timeline presentation flow.',
    icon: 'engine',
  },
  {
    title: 'Data Layer',
    stack: 'Shipment Records + Route Metadata',
    description: 'Structured datasets for shipments, status states, events, and operational indicators.',
    icon: 'data',
  },
  {
    title: 'Integration Layer',
    stack: 'Future API / ERP Connector',
    description: 'Clear boundary for replacing mock sources with secured backend services.',
    icon: 'integration',
  },
];

export const projectInfoItems = [
  { label: 'Project Type', value: 'Portfolio Demo' },
  { label: 'Focus', value: 'Interactive logistics platform website' },
  { label: 'Stack', value: 'Astro + TypeScript + TailwindCSS' },
  { label: 'Architecture', value: 'Static-first modular frontend' },
] as const;
