import React from "react";
import Image from "next/image";

import appleBadge from "../../../public/svg/apple-store-badge.svg";
import playStoreBadge from "../../../public/svg/play-store-badge.svg";

export const StoresBadges = () => (
  <div className="flex ">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://apps.apple.com/cl/app/flexit/id1620889629"
    >
      <figure className="mr-4">
        <Image alt="Apple store" src={appleBadge} />
      </figure>
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://play.google.com/store/apps/details?id=com.flexit.app"
    >
      <figure>
        <Image alt="Play store" src={playStoreBadge} />
      </figure>
    </a>
  </div>
);
