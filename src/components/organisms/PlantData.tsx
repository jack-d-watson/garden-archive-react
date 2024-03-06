import {
  PlantCharacteristics,
  SeasonOfInterest,
} from "@/types/PlantCharacteristics";
import Heading, { HeadingType } from "../atoms/Heading";
import LabelledField from "../molecules/LabelledField";
import {
  decorateAttractableWildlife,
  decorateSeason,
  decorateSoilType,
  decorateSunNeeds,
  decorateWaterNeeds,
  decorateZone,
} from "@/utils/decoratePlantData";
import { isStringObject } from "util/types";

function getSeasonComponent(seasonsOfInterest: SeasonOfInterest) {
  const fieldKey = "season";
  const label = "Season of Interest";
  if (typeof seasonsOfInterest === "string") {
    <LabelledField
      id={fieldKey}
      label={label}
      fieldData={[decorateSeason(seasonsOfInterest)]}
    />;
  } else {
    const start = decorateSeason(seasonsOfInterest.beginning);
    const end = decorateSeason(seasonsOfInterest.end);
    return (
      <LabelledField
        id="season"
        label={label}
        fieldData={{
          start,
          end,
        }}
      />
    );
  }
}

export default function PlantData(props: { plantData: PlantCharacteristics }) {
  const { plantData } = props;
  return (
    <div>
      <Heading type={HeadingType.SectionHeader} className="pt-4">
        Plant Needs
      </Heading>
      <ul>
        <li>
          <LabelledField
            label="Type"
            id="plantType"
            fieldData={plantData.plantType}
          />
        </li>
        <li>{getSeasonComponent(plantData.seasonOfInterest)}</li>
        <li>
          <LabelledField
            label="Soil Type"
            id="soil"
            fieldData={decorateSoilType(plantData.soilType)}
          />
        </li>
        <li>
          <LabelledField
            label="Drought Tolerant?"
            id="droughtTolerant"
            fieldData={plantData.droughtTolerant ? "Yes" : "No"}
          />
        </li>
        <li>
          <LabelledField
            label="Water"
            id="water"
            fieldData={decorateWaterNeeds(plantData.waterNeeds)}
          />
        </li>
        <li>
          <LabelledField
            label="Hardiness Zone"
            id="hardinessZone"
            fieldData={{
              start: decorateZone(plantData.hardinessZone.low),
              end: decorateZone(plantData.hardinessZone.high),
            }}
          />
        </li>
        <li>
          {plantData.heatZone && (
            <LabelledField
              label="Heat Zone"
              id="heatZone"
              fieldData={{
                start: decorateZone(plantData.heatZone.low),
                end: decorateZone(plantData.heatZone.high),
              }}
            />
          )}
        </li>
        <li>
          <LabelledField
            label="Sun Exposure"
            id="sun"
            fieldData={decorateSunNeeds(plantData.sunNeeds)}
          />
        </li>
        <li>
          <LabelledField
            label="Attracts"
            id="attracts"
            fieldData={decorateAttractableWildlife(plantData.attracts)}
          />
        </li>
      </ul>
    </div>
  );
}
