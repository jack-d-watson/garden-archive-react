import { FieldValue } from "@/types/FieldValue";
import Badge from "./Badge";

export default function BadgeList(props: { fieldValues: FieldValue[] }) {
  return (
    <div className="">
      {props.fieldValues.map((fieldValue) => {
        return (
          <Badge
            label={fieldValue.value}
            key={fieldValue.value}
            type={fieldValue.badge.type}
            outline={fieldValue.badge.outline}
            icon={fieldValue.icon}
            className="mr-2"
          />
        );
      })}
    </div>
  );
}
