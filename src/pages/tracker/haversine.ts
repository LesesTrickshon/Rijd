/*const distance: any = haversineDistanceKM(
  45.009746,
  6.3482081,
  47.0097454,
  10.3838582
);*/

export function haversine(
  lat1Deg: number,
  lon1Deg: number,
  lat2Deg: number,
  lon2Deg: number,
): number {
  function toRad(degree: number): number {
    return (degree * Math.PI) / 180;
  }

  const lat1 = toRad(lat1Deg);
  const lon1 = toRad(lon1Deg);
  const lat2 = toRad(lat2Deg);
  const lon2 = toRad(lon2Deg);

  const { sin, cos, sqrt, atan2 } = Math;

  const R = 6371; // earth radius in km
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const a =
    sin(dLat / 2) * sin(dLat / 2) +
    cos(lat1) * cos(lat2) * sin(dLon / 2) * sin(dLon / 2);
  const c = 2 * atan2(sqrt(a), sqrt(1 - a));
  const d: number = R * c;
  return Number(d.toFixed(4));
}
