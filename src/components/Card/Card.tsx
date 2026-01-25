import type React from "react";
import c from "./Card.module.scss";
import clsx from "clsx";

export const cardIconPallette = {
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
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  variant?: "small" | "medium" | "large";
  color: keyof typeof cardIconPallette;
  title?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  text,
  icon: Icon,
  variant = "small",
  color,
  title = "",
  className = "",
}) => {
  return (
    <div
      className={clsx({
        [className]: Boolean(className),
        [c.small]: variant === "small",
        [c.medium]: variant === "medium",
        [c.large]: variant === "large",
      })}
    >
      <div
        className={c.iconWrapper}
        style={{
          backgroundColor:
            cardIconPallette[color as keyof typeof cardIconPallette] || color,
        }}
      >
        <Icon className={c.icon} />
      </div>
      {variant === "large" && title && <h3 className={c.title}>{title}</h3>}
      {text && <p className={c.text}>{text}</p>}
    </div>
  );
};

export default Card;
