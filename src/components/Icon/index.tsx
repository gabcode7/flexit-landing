import React from "react";
import Image from "next/image";

import { TIcons } from "../../types/Icons";
import ClockIcon from "../../../public/svg/clock-icon.svg";
import LocationIcon from "../../../public/svg/location-icon.svg";
import ChronometerIcon from "../../../public/svg/chronometer-icon.svg";
import GraphicIcon from "../../../public/svg/graphic-icon.svg";
import HeartIcon from "../../../public/svg/heart-icon.svg";
import MoneyIcon from "../../../public/svg/money-icon.svg";

interface IProps {
  icon: TIcons;
}

const getIcon = (icon: TIcons) => {
  switch (icon) {
    case "Clock":
      return ClockIcon;

    case "Location":
      return LocationIcon;

    case "Chronometer":
      return ChronometerIcon;

    case "Money":
      return MoneyIcon;

    case "Heart":
      return HeartIcon;

    case "Graphic":
      return GraphicIcon;
    default:
      "";
      break;
  }
};

export const Icon = (props: IProps) => {
  const { icon } = props;
  return (
    <figure>
      <Image alt="Icono" src={getIcon(icon)} />
    </figure>
  );
};
