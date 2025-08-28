export function success(
  position: any,
  setLat: any,
  setLon: any,
  setPlaces: any,
) {
  setLat(position.coords.latitude);
  setLon(position.coords.longitude);

  const data = {
    lat: Number(position.coords.latitude.toFixed(5)),
    lon: Number(position.coords.longitude.toFixed(5)),
  };

  setPlaces((prev: any[]) => [...prev, data]);
}

export function error() {
  alert("Error: Location didnt work bc IDFK");
}

// export let places: any[] = [];
