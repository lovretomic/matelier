import type React from "react";
import c from "./Card.module.scss";

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
  return <div className={variant}>desi</div>;
};

export default Card;
