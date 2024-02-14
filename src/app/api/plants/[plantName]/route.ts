import { getPlant } from "@/data/plantsDatabase"

export async function GET(
  request: Request,
  { params }: { params: { plantName: string } }
) {
    let plantName = params.plantName
    console.log(`GET Request received to /api/plants/${plantName}`)
    const plantData = await getPlant(plantName);
    return Response.json(plantData)
}
