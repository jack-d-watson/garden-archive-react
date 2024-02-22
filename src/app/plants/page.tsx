import Heading, { HeadingType } from "@/components/atoms/Heading";
import LinkList, { LinkItem } from "@/components/molecules/LinkList";
import { PlantSummary, getPlantList } from "@/data/plantsDatabase";

function getPlantLabel(
  commonName: string,
  scientificName: string,
  varietyName?: string
) {
  let label = "";
  if (varietyName) {
    label += `"${varietyName}" `;
  }
  label += commonName + " - " + scientificName;
  return label;
}

async function getData(): Promise<LinkItem[]> {
  // const res = await fetch("http://localhost:3000/api/plants");
  const plantList = await getPlantList()
  // if (!res.ok) {
  //   throw new Error("Could not get data from /api/plants");
  // }

  // const plantList: PlantSummary[] = await res.json();

  const plantListArray: LinkItem[] = [];
  plantList.map((plantSummary) => {
    
    plantListArray.push({
      key: plantSummary.urlSafeKey,
      destination: "/plants/" + plantSummary.urlSafeKey,
      label: getPlantLabel(
        plantSummary.commonName,
        plantSummary.scientificName,
        plantSummary.varietyName
      ),
    });
  });
  return plantListArray;
}

export default async function Plants() {
  const plantList = await getData();

  return (
    <div>
      <Heading type={HeadingType.PageTitle}>Colorado Native Plants</Heading>
      <ul>
        <LinkList data={plantList} />
      </ul>


      <Heading type={HeadingType.SectionHeader}>Page Todo:</Heading>
      <ol>
        <li>Add table of plants sorted alphabetically</li>
        <li>Search bar for plants</li>
        <li>plant pagination</li>
        <li>featured plants</li>
      </ol>
    </div>
  );
}
