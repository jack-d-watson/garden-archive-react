import { FieldValue } from "@/types/FieldValue";

export function decorateSizeData(size: string): FieldValue {
  return {
    value: size,
    badge: {
      type: "ghost",
      outline: true,
    },
  };
}
