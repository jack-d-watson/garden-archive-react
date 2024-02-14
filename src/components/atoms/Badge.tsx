import Icon, { IconNames } from "./Icon";

export type BadgeType =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "error";

function convertBadgeTypeToString(type: BadgeType): string {
  return type + "";
}

export default function Badge(props: {
  label: string;
  type: BadgeType;
  outline: boolean;
  className?: string;
  icon?: {
    name: IconNames;
    color: string;
    size: string;
  };
}) {
  const { label, type, outline, className, icon } = props;
  return (
    <div
      className={`badge badge-${convertBadgeTypeToString(type)} gap-2 ${
        outline ? "badge-outline" : ""
      } ${className ? className : ""}`}
    >
      {icon && (
        <Icon
          name={icon.name}
          color={icon.color}
          size={icon.size}
          className=""
        />
      )}
      {label}
    </div>
  );
}
