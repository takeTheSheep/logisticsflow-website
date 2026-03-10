const trackingCodePattern = /^LF-\d{5}$/;

export const normalizeTrackingCode = (input: string): string =>
  input
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '');

export const validateTrackingCode = (input: string): boolean => {
  const normalized = normalizeTrackingCode(input);
  return trackingCodePattern.test(normalized);
};
