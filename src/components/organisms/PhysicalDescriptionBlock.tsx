import { PhysicalDescription as PhysicalDescriptionType } from "@/types/PlantCharacteristics";
import Heading, { HeadingType } from "../atoms/Heading";
import PhysicalDescription from "../molecules/PhysicalDescription";
import BodyCopy from "../atoms/BodyCopy";
import LabelledField from "../molecules/LabelledField";
import { decorateSizeData } from "@/utils/decoratePlantPhysicalDescription";

export default function PhysicalDescriptionBlock(props: {
  physicalDescriptions: PhysicalDescriptionType;
  className?: string;
}) {
  const { physicalDescriptions } = props;
  return (
    <div className={props.className ? props.className : ""}>
      <Heading type={HeadingType.SectionHeader} className="">
        Physical Characteristics
      </Heading>
      <BodyCopy>
        The following can be used to identify this plant in the wild.
      </BodyCopy>
      {physicalDescriptions.flower && (
        <PhysicalDescription title="Flowers">
          {physicalDescriptions.flower}
        </PhysicalDescription>
      )}
      {physicalDescriptions.leaf && (
        <PhysicalDescription title="Leaves">
          {physicalDescriptions.leaf}
        </PhysicalDescription>
      )}
      <br />
      <Heading type={HeadingType.SubSectionHeader} className="">
        Mature Sizes
      </Heading>
      <LabelledField
        label="Height"
        id="matureHeight"
        fieldData={{
          start: decorateSizeData(physicalDescriptions.height.low + " ft"),
          end: decorateSizeData(physicalDescriptions.height.high + " ft"),
        }}
      />
      <LabelledField
        label="Spread"
        id="matureSpread"
        fieldData={{
          start: decorateSizeData(physicalDescriptions.spread.low + " ft"),
          end: decorateSizeData(physicalDescriptions.spread.high + " ft"),
        }}
      />
    </div>
  );
}
