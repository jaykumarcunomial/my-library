import React from "react";
import "../../styles/tailwind.css";
import { classNames } from "../../helpers/utils";

export interface BadgeProps {
  label: string;
  color?:
    | "gray"
    | "slate"
    | "zinc"
    | "neutral"
    | "stone"
    | "orange"
    | "amber"
    | "lime"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "violet"
    | "fuchsia"
    | "rose"
    | "blue"
    | "yellow"
    | "red"
    | "green"
    | "indigo"
    | "purple"
    | "pink";
}

const Badge = (props: BadgeProps) => {
  return (
    <span
      className={classNames(
        props.color
          ? `bg-${props.color}-50 text-${props.color}-700 ring-${props.color}-600/10`
          : "bg-gray-50 text-gray-700 ring-gray-600/10",
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
      )}
    >
      {props.label}
    </span>
  );
};

export default Badge;
