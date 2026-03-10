export type ShipmentStatus =
  | 'Label Created'
  | 'Picked Up'
  | 'In Transit'
  | 'Arrived at Hub'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Delayed';

export interface TrackingEvent {
  status: ShipmentStatus;
  location: string;
  timestamp: string;
  note?: string;
}

export interface TrackingRecord {
  id: string;
  status: ShipmentStatus;
  origin: string;
  destination: string;
  estimatedArrival: string;
  lastUpdate: string;
  currentLocation: string;
  shipmentType: string;
  serviceLevel: string;
  route: string;
  supportNote?: string;
  timeline: TrackingEvent[];
}
