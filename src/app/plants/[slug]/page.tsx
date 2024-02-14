import PageTitle from "@/components/molecules/PageTitle";
import PhysicalDescriptionBlock from "@/components/organisms/PhysicalDescriptionBlock";
import PlantData from "@/components/organisms/PlantData";
import { PlantCharacteristics } from "@/types/PlantCharacteristics";

async function getData(
  scientificPlantName: string
): Promise<PlantCharacteristics> {
  const res = await fetch(
    "http://localhost:3000/api/plants/" + scientificPlantName
  );

  if (!res.ok) {
    throw new Error("Could not get data from /api/plants");
  }

  return await res.json();
}

export default async function PlantSlug({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  let plantData = await getData(params.slug);
  plantData;
  return (
    <div className="px-2">
      <PageTitle
        title={plantData.commonName + " - " + plantData.scientificName}
        subtitle={plantData.varietyName}
      />
      <div className="grid grid-cols-2">
        <div className="">
          <PhysicalDescriptionBlock
            physicalDescriptions={plantData.physicalDescription}
          />
          <PlantData plantData={plantData} />
        </div>
        <div className="">photo stuff</div>
      </div>
    </div>
  );
}
