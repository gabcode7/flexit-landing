import React from "react";
import Image from "next/image";

import Logo from "../../../public/svg/logo.svg";
import { StoresBadges } from "../StoresBadges";

export const Footer = () => {
  return (
    <footer className="bg-deepGray px-4 py-16">
      <figure className="flex items-center justify-center">
        <Image alt="Logo" src={Logo} />
      </figure>
      <p className="text-ownWhite mt-8 text-center">
        La App Flexit es parte del equipo de operaciones de Falabella Retail, un
        grupo de apasionados por las nuevas tecnologías y las mejores formas de
        trabajo.
      </p>

      <div className="mt-8">
        <StoresBadges />
      </div>

      <p className="text-ownWhite mt-8 text-center">
        ©2001-2021 Todos los derechos reservados. Flexit® es una marca
        registrada.
      </p>
    </footer>
  );
};
