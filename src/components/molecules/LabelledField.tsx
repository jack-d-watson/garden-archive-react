import { FieldValue } from "@/types/FieldValue";
import BadgeList from "../atoms/BadgeList";
import Field from "../atoms/Field";
import Label from "../atoms/Label";
import RangeField from "../atoms/RangeField";

export type FieldData =
  | string
  | FieldValue[]
  | { start: FieldValue; end: FieldValue };

function getFieldComponent(fieldData: FieldData) {
  if (typeof fieldData === "string") {
    return <Field>{fieldData}</Field>;
  } else if (Array.isArray(fieldData)) {
    return <BadgeList fieldValues={fieldData} />;
  } else {
    return <RangeField className="" start={fieldData.start} end={fieldData.end} />;
  }
}

export default function LabelledField(props: {
  label: string;
  id: string;
  fieldData: FieldData;
}) {
  return (
    <div className="grid grid-cols-2 py-1 items-center" id={props.id}>
      <Label className="">{props.label}</Label>
      {getFieldComponent(props.fieldData)}
    </div>
  );
}
