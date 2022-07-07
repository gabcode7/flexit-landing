import React from "react";
import Image from "next/image";

import appleBadge from "../../../public/svg/apple-store-badge.svg";
import playStoreBadge from "../../../public/svg/play-store-badge.svg";

export const StoresBadges = () => (
  <div className="flex ">
    <figure className="mr-4">
      <Image alt="Apple store" src={appleBadge} />
    </figure>
    <figure>
      <Image alt="Play store" src={playStoreBadge} />
    </figure>
  </div>
);
