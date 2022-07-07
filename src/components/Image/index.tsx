import React from "react";
import NextImage, { StaticImageData } from "next/image";

interface IProps {
  src: StaticImageData;
  alt: string;
  width?: string;
  height?: string;
}

export const Image = (props: IProps) => {
  const { src, alt } = props;
  return (
    <figure
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <NextImage alt={alt} src={src} layout="fill" objectFit="contain" />
    </figure>
  );
};
