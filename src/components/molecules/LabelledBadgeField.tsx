import { FieldValue } from "@/types/FieldValue";
import Badge from "../atoms/Badge";
import Label from "../atoms/Label";

export default function LabelledBadgeField(props: {
  label: string;
  fieldValue: FieldValue;
  id: string;
}) {
    const { label, fieldValue, id } = props

    return (
        <div className="flex flex-row gap-4" id={id}>
            <Label>{label}</Label>
            <Badge type={"neutral"} label={fieldValue.value} icon={fieldValue.icon} outline={false}/>
        </div>
    )
}
