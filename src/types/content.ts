export interface NavigationItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  icon: IconKey;
  signal: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  target?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface TestimonialItem {
  quote: string;
  role: string;
}

export interface IndustryItem {
  title: string;
  detail: string;
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type IconKey =
  | 'box'
  | 'warehouse'
  | 'route'
  | 'visibility'
  | 'support'
  | 'border'
  | 'astro'
  | 'typescript'
  | 'tailwind'
  | 'components'
  | 'static'
  | 'performance'
  | 'seo'
  | 'dashboard'
  | 'api'
  | 'monitoring'
  | 'frontend'
  | 'engine'
  | 'data'
  | 'integration'
  | 'notification'
  | 'analytics'
  | 'workflow'
  | 'request';

export interface TechStackItem {
  title: string;
  description: string;
  icon: IconKey;
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon: IconKey;
}

export interface OperationMetricItem {
  title: string;
  value: string;
  detail: string;
  icon: IconKey;
}

export interface OperationRowItem {
  shipmentId: string;
  route: string;
  status: 'In Transit' | 'Delivered' | 'Delayed' | 'Arrived at Hub' | 'Out for Delivery';
  eta: string;
}

export interface ArchitectureLayerItem {
  title: string;
  stack: string;
  description: string;
  icon: IconKey;
}

export interface MapPoint {
  x: number;
  y: number;
}

export interface MapShipmentItem {
  id: string;
  origin: string;
  destination: string;
  status: 'In Transit' | 'Delivered' | 'Delayed' | 'Arrived at Hub';
  path: {
    start: MapPoint;
    control: MapPoint;
    end: MapPoint;
  };
  marker: MapPoint;
}

export interface SystemHealthItem {
  name: string;
  status: string;
  level: 'good' | 'warn' | 'critical';
}

export interface FeatureModuleItem {
  title: string;
  description: string;
  icon: IconKey;
  handles: string[];
}

export interface WorkflowStepItem {
  title: string;
  description: string;
  icon: IconKey;
}

export interface DeveloperFeatureItem {
  title: string;
  description: string;
  icon: IconKey;
}

export interface LineChartPoint {
  label: string;
  value: number;
}

export interface PieChartSlice {
  label: string;
  value: number;
  color: string;
}

export interface BarChartItem {
  label: string;
  value: number;
}
