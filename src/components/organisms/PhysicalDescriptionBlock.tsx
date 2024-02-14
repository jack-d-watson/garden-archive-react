import { PhysicalDescription as PhysicalDescriptionType } from "@/types/PlantCharacteristics";
import Heading, { HeadingType } from "../atoms/Heading";
import PhysicalDescription from "../molecules/PhysicalDescription";
import BodyCopy from "../atoms/BodyCopy";

export default function PhysicalDescriptionBlock(props: {
  physicalDescriptions: PhysicalDescriptionType;
  className?: string;
}) {
  return (
    <div className={props.className ? props.className : ""}>
      <Heading type={HeadingType.SectionHeader} className="pt-4">
        Physical Characteristics
      </Heading>
      <BodyCopy>The following can be used to identify this plant in the wild.</BodyCopy>
      {props.physicalDescriptions.flower && (
        <PhysicalDescription title="Flowers">
          {props.physicalDescriptions.flower}
        </PhysicalDescription>
      )}
      {props.physicalDescriptions.leaf && (
        <PhysicalDescription title="Leaves">
          {props.physicalDescriptions.leaf}
        </PhysicalDescription>
      )}
    </div>
  );
}
