import { BadgeType } from "@/components/atoms/Badge";
import { IconNames } from "@/components/atoms/Icon";

export type FieldValue = {
    value: string;
    icon?: {
        name: IconNames;
        color: string;
        size: string;
    }
    badge: {
        type: BadgeType;
        outline: boolean
    }
};