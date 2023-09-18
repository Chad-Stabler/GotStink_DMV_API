export async function getVehicle(query) {
  const rawData = await fetch(`/.netlify/functions/vehicle?vin=${query}`);

  const data = await rawData.json();

  return data;
}