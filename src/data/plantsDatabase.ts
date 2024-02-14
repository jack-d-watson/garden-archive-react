import { PlantCharacteristics } from "@/types/PlantCharacteristics";

const plantFiles = ["yarrow.json", "chocolate-flower.json"];

let hasPlantData = false;

export type PlantSummary = {
  commonName: string;
  scientificName: string;
  varietyName?: string;
  urlSafeKey: string;
};
type PlantDatabase = { [n: string]: PlantCharacteristics };
const plantData: PlantDatabase = {};

async function fetchPlants(): Promise<PlantCharacteristics[]> {
  const plants: PlantCharacteristics[] = [];
  for (let plantFile of plantFiles) {
    const newPlant: PlantCharacteristics = await import(`./${plantFile}`);
    plants.push(newPlant);
  }

  return plants;
}

async function populatePlantData() {
  const plantArray = await fetchPlants();
  for (let plant of plantArray) {
    plantData[plant.scientificName.toLocaleLowerCase().replace(" ", "-")] =
      plant;
  }
  hasPlantData = true;
}

/**
 *
 * @param name Scientific Plant Name. Should be lower case and hyphenated
 * @returns
 */
export async function getPlant(name: string): Promise<PlantCharacteristics> {
  if (!hasPlantData) {
    await populatePlantData();
  }
  const returnableData = plantData[name];
  if (!returnableData) {
    throw new Error(`Could not find plant with name ${name}`);
  }

  return returnableData;
}

export async function getPlantList(): Promise<PlantSummary[]> {
  if (!hasPlantData) {
    await populatePlantData();
  }
  const summaryArray : PlantSummary[] = [];
  for (let key in plantData) {
    summaryArray.push({
      commonName: plantData[key].commonName,
      scientificName: plantData[key].scientificName,
      varietyName: plantData[key].varietyName,
      urlSafeKey: key,
    });
  }
  return summaryArray;
}
