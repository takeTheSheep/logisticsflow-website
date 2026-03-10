import type { TrackingRecord } from '@/types/tracking';

export const demoTrackingCodes = ['LF-48291', 'LF-19420', 'LF-77354', 'LF-65018'];

export const trackingRecords: TrackingRecord[] = [
  {
    id: 'LF-48291',
    status: 'In Transit',
    origin: 'Hamburg, DE',
    destination: 'Amsterdam, NL',
    estimatedArrival: '2026-03-11T14:00:00.000Z',
    lastUpdate: '2026-03-09T08:40:00.000Z',
    currentLocation: 'Osnabruck Checkpoint, DE',
    shipmentType: 'Palletized Retail Freight',
    serviceLevel: 'Priority Ground',
    route: 'Hamburg -> Osnabruck -> Amsterdam',
    timeline: [
      {
        status: 'Label Created',
        location: 'Hamburg, DE',
        timestamp: '2026-03-08T05:15:00.000Z',
      },
      {
        status: 'Picked Up',
        location: 'Hamburg, DE',
        timestamp: '2026-03-08T09:10:00.000Z',
      },
      {
        status: 'In Transit',
        location: 'Osnabruck Checkpoint, DE',
        timestamp: '2026-03-09T08:40:00.000Z',
      },
    ],
  },
  {
    id: 'LF-19420',
    status: 'Arrived at Hub',
    origin: 'Rotterdam, NL',
    destination: 'Brussels, BE',
    estimatedArrival: '2026-03-10T16:30:00.000Z',
    lastUpdate: '2026-03-09T11:05:00.000Z',
    currentLocation: 'Antwerp Hub, BE',
    shipmentType: 'Consumer Goods Consolidated Load',
    serviceLevel: 'Standard Ground',
    route: 'Rotterdam -> Antwerp -> Brussels',
    timeline: [
      {
        status: 'Label Created',
        location: 'Rotterdam, NL',
        timestamp: '2026-03-07T07:20:00.000Z',
      },
      {
        status: 'Picked Up',
        location: 'Rotterdam, NL',
        timestamp: '2026-03-07T13:00:00.000Z',
      },
      {
        status: 'In Transit',
        location: 'Breda Corridor, NL',
        timestamp: '2026-03-08T18:45:00.000Z',
      },
      {
        status: 'Arrived at Hub',
        location: 'Antwerp Hub, BE',
        timestamp: '2026-03-09T11:05:00.000Z',
      },
    ],
  },
  {
    id: 'LF-77354',
    status: 'Delivered',
    origin: 'Berlin, DE',
    destination: 'Cologne, DE',
    estimatedArrival: '2026-03-08T15:00:00.000Z',
    lastUpdate: '2026-03-08T14:42:00.000Z',
    currentLocation: 'Delivered - Cologne, DE',
    shipmentType: 'B2B Electronics Shipment',
    serviceLevel: 'Express',
    route: 'Berlin -> Leipzig Hub -> Cologne',
    timeline: [
      {
        status: 'Label Created',
        location: 'Berlin, DE',
        timestamp: '2026-03-07T06:50:00.000Z',
      },
      {
        status: 'Picked Up',
        location: 'Berlin, DE',
        timestamp: '2026-03-07T10:30:00.000Z',
      },
      {
        status: 'Arrived at Hub',
        location: 'Leipzig Hub, DE',
        timestamp: '2026-03-07T18:15:00.000Z',
      },
      {
        status: 'Out for Delivery',
        location: 'Cologne, DE',
        timestamp: '2026-03-08T09:30:00.000Z',
      },
      {
        status: 'Delivered',
        location: 'Cologne, DE',
        timestamp: '2026-03-08T14:42:00.000Z',
      },
    ],
  },
  {
    id: 'LF-65018',
    status: 'Delayed',
    origin: 'Warsaw, PL',
    destination: 'Paris, FR',
    estimatedArrival: '2026-03-12T18:00:00.000Z',
    lastUpdate: '2026-03-09T06:10:00.000Z',
    currentLocation: 'Lodz Consolidation Yard, PL',
    shipmentType: 'Industrial Components',
    serviceLevel: 'Cross-Border Secure',
    route: 'Warsaw -> Lodz -> Paris',
    supportNote: 'Customs documentation review in progress. Dedicated coordinator monitoring release window.',
    timeline: [
      {
        status: 'Label Created',
        location: 'Warsaw, PL',
        timestamp: '2026-03-07T09:00:00.000Z',
      },
      {
        status: 'Picked Up',
        location: 'Warsaw, PL',
        timestamp: '2026-03-07T13:40:00.000Z',
      },
      {
        status: 'Delayed',
        location: 'Lodz Consolidation Yard, PL',
        timestamp: '2026-03-09T06:10:00.000Z',
        note: 'Additional customs processing documents requested.',
      },
    ],
  },
];
