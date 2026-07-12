export function isMobileUserAgent(userAgent: string): boolean {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
  return mobileRegex.test(userAgent);
}

export function isTabletUserAgent(userAgent: string): boolean {
  const tabletRegex = /iPad|Tablet|tablet|PlayBook|Silk/i;
  return tabletRegex.test(userAgent);
}

export function getDeviceType(userAgent: string): "mobile" | "tablet" | "desktop" {
  if (isMobileUserAgent(userAgent)) return "mobile";
  if (isTabletUserAgent(userAgent)) return "tablet";
  return "desktop";
}