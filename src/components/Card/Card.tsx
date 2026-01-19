import type React from "react";
import { isValidElement } from "react";
import c from "./Card.module.scss";
import clsx from "clsx";

const palette = {
  yellow: "#ebb739",
  orange: "#f4a261",
  "brick-red": "#e76f51",
  "dark-blue": "#264653",
  aquamarine: "#2a9d8f",
  "ugly-white": "#f7f7f7",
  "pastel-blue": "#b2c6ce",
  pink: "#d07f97",
} as const;

type CardProps = {
  text: string;
  icon: string | React.ReactElement;
  variant?: "default" | "small" | "large";
  color: string;
};

const Card: React.FC<CardProps> = ({
  text,
  icon,
  variant = "default",
  color,
}) => {
  return (
    <div
      className={clsx({
        [c.default]: variant === "default",
        [c.small]: variant === "small",
        [c.large]: variant === "large",
      })}
    >
      <div
        className={c.iconWrapper}
        style={{
          backgroundColor: palette[color as keyof typeof palette] || color,
        }}
      >
        {typeof icon === "string" ? (
          <img src={icon} alt="icon" />
        ) : isValidElement(icon) ? (
          icon
        ) : null}
      </div>
      {text}
    </div>
  );
};

export default Card;
