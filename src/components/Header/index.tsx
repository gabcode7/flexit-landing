import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/svg/flexit.svg";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <header className="px-4 py-16">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <div>
              <NextImage src={logo} />
            </div>
          </a>
        </Link>

        <nav className="hidden w925:block">
          <ul className="flex">
            <li>
              <a className="font-bold hover:underline" href="#personas">
                Personas
              </a>
            </li>
            <li>
              <a className="font-bold hover:underline ml-8" href="#empresas">
                Empresas
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:underline ml-8"
                href="#preguntas-frecuentes"
              >
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </nav>

        {showMobileMenu && (
          <div
            style={{ background: "rgba(9, 9, 9, 0.70)" }}
            className="top-0 bottom-0 right-0 left-0 z-[99999999] w925:hidden fixed w-screen h-screen"
          >
            <nav className="w-3/6 bg-white h-screen p-8 fixed top-0 right-0">
              <div
                onClick={() => setShowMobileMenu(false)}
                className="pt-16 flex justify-end"
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="mt-16 flex flex-col justify-center">
                <li>
                  <a className="font-bold hover:underline" href="#personas">
                    Personas
                  </a>
                </li>
                <li>
                  <a className="font-bold hover:underline" href="#empresas">
                    Empresas
                  </a>
                </li>
                <li>
                  <a
                    className="font-bold hover:underline"
                    href="#preguntas-frecuentes"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div
          onClick={() => setShowMobileMenu(true)}
          className="block w925:hidden"
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
