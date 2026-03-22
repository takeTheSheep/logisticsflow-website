export interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  detail: string;
}

export interface TrackingRecord {
  code: string;
  origin: string;
  destination: string;
  status: 'in-transit' | 'delivered' | 'pending' | 'exception';
  carrier: string;
  eta: string;
  events: TrackingEvent[];
}

const trackingData: Record<string, TrackingRecord> = {
  'LF-48291': {
    code: 'LF-48291',
    origin: 'Rotterdam, NL',
    destination: 'Munich, DE',
    status: 'in-transit',
    carrier: 'EuroFreight GmbH',
    eta: '2026-03-24',
    events: [
      { status: 'Picked up', location: 'Rotterdam Hub', timestamp: '2026-03-20 08:15', detail: 'Shipment collected from origin warehouse.' },
      { status: 'In transit', location: 'Duisburg, DE', timestamp: '2026-03-21 14:30', detail: 'Crossed border checkpoint. Customs cleared.' },
      { status: 'In transit', location: 'Frankfurt, DE', timestamp: '2026-03-22 06:45', detail: 'Relay transfer at Frankfurt logistics center.' },
    ],
  },
  'LF-73120': {
    code: 'LF-73120',
    origin: 'Antwerp, BE',
    destination: 'Warsaw, PL',
    status: 'delivered',
    carrier: 'TransBaltic Sp. z o.o.',
    eta: '2026-03-18',
    events: [
      { status: 'Picked up', location: 'Antwerp Port', timestamp: '2026-03-15 10:00', detail: 'Container released from port.' },
      { status: 'In transit', location: 'Berlin, DE', timestamp: '2026-03-16 22:00', detail: 'Transit through Berlin hub.' },
      { status: 'Out for delivery', location: 'Warsaw, PL', timestamp: '2026-03-18 07:30', detail: 'Final mile dispatch initiated.' },
      { status: 'Delivered', location: 'Warsaw, PL', timestamp: '2026-03-18 11:45', detail: 'Signed by authorized receiver.' },
    ],
  },
  'LF-55034': {
    code: 'LF-55034',
    origin: 'Lyon, FR',
    destination: 'Milan, IT',
    status: 'exception',
    carrier: 'AlpineLogistics S.r.l.',
    eta: '2026-03-23',
    events: [
      { status: 'Picked up', location: 'Lyon Warehouse', timestamp: '2026-03-19 09:00', detail: 'Shipment collected.' },
      { status: 'Exception', location: 'Mont Blanc Tunnel', timestamp: '2026-03-20 16:00', detail: 'Delay due to tunnel closure. Rerouting via Fréjus.' },
    ],
  },
};

export function validateTrackingCode(code: string): boolean {
  return /^LF-\d{5}$/.test(code);
}

export function normalizeTrackingCode(code: string): string {
  return code.trim().toUpperCase();
}

export function getTrackingRecord(code: string): TrackingRecord | null {
  return trackingData[code] || null;
}

export const sampleCodes = ['LF-48291', 'LF-73120', 'LF-55034'];
