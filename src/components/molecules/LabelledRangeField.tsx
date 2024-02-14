import { FieldValue } from "@/types/FieldValue";
import Label from "../atoms/Label";
import RangeField from "../atoms/RangeField";

export default function LabelledRangeField(props: {
  label: string;
  start: FieldValue;
  end: FieldValue;
  key: string;
}) {
    const { label, start, end, key } = props
    return (
        <div className="flex flex-row gap-4" id={key}>
            <Label>{label}:</Label>
            <RangeField start={start} end={end} />
        </div>
    )
}
