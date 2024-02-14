import { getPlantList } from "@/data/plantsDatabase";

export async function GET() {
    console.log(`GET Request received to /api/plants`)
    const plantData = await getPlantList();
    return Response.json(plantData)
}