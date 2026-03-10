import { trackingRecords } from '@/data/trackingDemo';
import type { TrackingRecord } from '@/types/tracking';
import { normalizeTrackingCode } from './validateTrackingCode';

export const getTrackingRecord = (trackingCode: string): TrackingRecord | null => {
  const normalizedCode = normalizeTrackingCode(trackingCode);
  const record = trackingRecords.find((item) => item.id === normalizedCode);
  return record ?? null;
};
