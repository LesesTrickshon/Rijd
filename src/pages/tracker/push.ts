import { haversine } from "./haversine.ts";

export function push(places: any[], startTime: string, endTime: string) {
  /* Three Parts:
  - Points to distance (Haversine formular)
  - Pull Array
  - Format Data
  - Append Data to my Array
  */

  /* Step 1: Points to distance */
  let length: number = 0;
  for (let i = 0; i < places.length - 2; i++) {
    length += haversine(
      places[i].lat,
      places[i].lon,
      places[i + 1].lat || places[i].lat,
      places[i + 1].lon || places[i].lon,
    );
  }

  /* Pull array */
  const pulledArray = JSON.parse(localStorage.getItem("array") || "[]");

  /* Step 3: Format the Data */
  const data = {
    date: String(new Date().toJSON().slice(0, 10).replace(/-/g, "/")),
    distance: length.toFixed(0),
    start: startTime,
    end: endTime,
    id: pulledArray.length,
  };

  /* Step 4: Append the Data */
  const newArray = [...pulledArray, data];
  localStorage.setItem("array", JSON.stringify(newArray));
  alert("Data saved successfully! :3");
  return newArray;
}
