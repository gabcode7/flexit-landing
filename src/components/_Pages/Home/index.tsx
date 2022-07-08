import type { NextPage } from "next";
import { Image } from "../../Image";
import NextImage, { StaticImageData } from "next/image";
import MobileFlexitImg from "../../../../public/svg/flexit-mobile.svg";
import GirlIllustration from "../../../../public/illustration/girl.svg";
import PeopleSelectionIllustration from "../../../../public/illustration/people-selection.svg";
import FlexitPreview1Illustration from "../../../../public/illustration/flexit-preview-1.png";
import FlexitPreview2Illustration from "../../../../public/illustration/flexit-preview-2.png";
import FormIlustration1 from "../../../../public/illustration/form-ilustration1.svg";
import FormIlustration2 from "../../../../public/illustration/form-ilustration2.svg";
import FallabelaLogo from "../../../../public/illustration/falabella.png";
import MangoLogo from "../../.././../public/illustration/mango.png";
import EtamLogo from "../../.././../public/illustration/etham.png";
import AldoLogo from "../../../../public/illustration/aldo.png";
import AmericaninoLogo from "../../../../public/illustration/americanino.png";
import LaMartinaLogo from "../../../../public/illustration/la-martina.png";
import JuanValdezLogo from "../../../../public/illustration/juan-valdez.png";
import ClarksLogo from "../../../../public/illustration/clarks.png";
import CalzedoniaLogo from "../../../../public/illustration/calzedonia.png";
import CartesLogo from "../../../../public/illustration/carters.png";
import MockupPantallas from "../../../../public/illustration/mockup-pantallas.png";
import Flexit from "../../../../public/svg/flexit.svg";
import FlexitCellphone from "../../../../public/illustration/flexit-cellphone.png";
import { StoresBadges } from "../../StoresBadges";
import { Icon } from "../../Icon";
import { FrequencyQuestions } from "../../FrequencyQuestions";

export const HomePage: NextPage = () => {
  return (
    <div>
      <section>
        <div className="bg-primary w925:px-44  pt-8 flex flex-col items-end align-end w925:flex w925:flex-row rounded-primary">
          <div className="w-full w925:mr-16  pl-4 md:pb-2">
            <h1 className="text-white text-5xl w925:text-6xl md:text-center w925:text-left font-bold">
              ¡Súmate hoy <br /> a{" "}
              <span>
                <NextImage alt="flexit" src={Flexit} />
              </span>
              !
            </h1>
            <div className=" w925:flex flex-col justify-center pr-4 bg-transparent">
              <p className="my-8 text-black md:text-center w925:text-left font-normal leading-5 w925:text-lg">
                Acercamos a las personas que buscan{" "}
                <b>trabajo flexible y de corto plazo</b> con empresas que
                necesitan <b>apoyos temporales de manera rápida,</b> y todo en
                un par de clics.
              </p>

              <StoresBadges />
            </div>
          </div>
          <div className="w-full  flex items-center justify-center">
            <img
              alt="flexit-cellphone"
              src={FlexitCellphone.src}
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </section>

      <div className=" w925:px-8">
        <section
          id="personas"
          className="w-full my-16 flex flex-wrap justify-between"
        >
          <div
            style={{ height: 320 }}
            className="w-full w925:w-2/5 relative mt-8 flex items-center justify-center"
          >
            <Image alt="Ilustración de chica" src={GirlIllustration} />
          </div>

          <div className="mt-8 w925:w-1/2">
            <h2 className="text-4xl font-bold text-black w925:text-6xl">
              Quiero ser un usuario
              <span className="text-deepGreen"> Flexit</span>
            </h2>
            <p className="mt-8 mb-4 text-black font-normal leading-5 w925:w-5/6 w925:text-lg">
              ¿Buscas trabajos que se <b>adapten a tus tiempos</b> y estilo de
              vida? Súmate a Flexit y postula a <b>ofertas flexibles</b> con
              todos los<b> beneficios de un contrato</b> laboral.
            </p>

            <div className="w-full grid grid-rows-2 grid-flow-col place-items-center md:flex md:flex-wrap md:justify-between w925:justify-start">
              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Calendar" />
                </div>

                <p className="text-center">Postula a contratos por dias</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Money" />
                </div>

                <p className="text-center">Recibir pagos semanales</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Clock" />
                </div>

                <p className="text-center">
                  Elegir tus horarios y preferencias
                </p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Location" />
                </div>

                <p className="text-center">Acceder a ofertas en todo el país</p>
              </article>
            </div>

            <div className="mt-8 flex justify-center w925:justify-start">
              <StoresBadges />
            </div>
          </div>
        </section>

        <section
          id="empresas"
          className="flex my-16 justify-start flex-wrap-reverse"
        >
          <div className="w925:w-3/5">
            <h2 className="text-4xl font-bold text-black w925:text-6xl">
              Quiero ser una <br /> empresa{" "}
              <span className="text-deepGreen">Flexit</span>
            </h2>
            <p className="mt-8 mb-4 text-black font-normal leading-5 w925:text-lg w925:w-4/5">
              ¿Necesitas contratar{" "}
              <b>apoyos para tu empresa ante un imprevisto</b>? Súmate a Flexit
              y, en un par de clics, consigue el <b>personal que necesitas.</b>
            </p>

            <div className="w-full grid grid-rows-2 grid-flow-col place-items-center md:flex md:flex-wrap md:gap-3 md:justify-between w925:justify-start">
              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Heart" />
                </div>

                <p className="text-center">Flexibilidad y agilidad</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Money" />
                </div>

                <p style={{ height: 48 }} className="text-center">
                  Eficiencia de costos
                </p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Chronometer" />
                </div>

                <p className="text-center">Selecciona al mejor candidato</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center mb-2"
                >
                  <Icon icon="Graphic" />
                </div>

                <p className="text-center">Todo en una sola plataforma</p>
              </article>
            </div>
          </div>
          <div
            style={{ height: 320 }}
            className="w-full w925:mr-6 w925:w-1/3 relative mt-8 flex items-center justify-center self-center"
          >
            <Image
              alt="Ilustración de chica"
              src={PeopleSelectionIllustration}
            />
          </div>
        </section>

        <section id="contact-form" className="mt-20">
          <h4 className="m-auto md:w-2/5 md:text-center md:text-lg mb-8">
            Si quieres tener más información y saber{" "}
            <b>cómo Flexit puede ayudar a tu empresa, </b>ponte en contacto con
            nosotros.
          </h4>
          <div className="flex justify-center">
            <div className=" hidden md:block">
              <NextImage src={FormIlustration1} />
            </div>
            <div className="w-full md:mr-16 md:ml-4 md:w-1/4">
              <form>
                <input
                  className="shadow border border-gray-400 rounded-lg py-2.5 px-3 text-gray-700 focus:outline-primary mb-3.5 w-full"
                  placeholder="Nombre y apellido"
                  autoComplete="off"
                  name="name"
                />{" "}
                <br />
                <input
                  className="shadow border border-gray-400 rounded-lg py-2.5 px-3 text-gray-700 focus:outline-primary mb-3.5 w-full"
                  placeholder="Empresa"
                  autoComplete="off"
                  name="business"
                />{" "}
                <br />
                <input
                  className="shadow border border-gray-400 rounded-lg py-2.5 px-3 text-gray-700 focus:outline-primary mb-3.5 w-full"
                  placeholder="Correo electrónico"
                  autoComplete="off"
                  name="email"
                />{" "}
                <br />
                <input
                  className="shadow border border-gray-400 rounded-lg py-2.5 px-3 text-gray-700 focus:outline-primary mb-1 w-full"
                  placeholder="Teléfono"
                  autoComplete="off"
                  name="cellphone"
                />
                <br />
                <span className="text-gray-400 ml-4 text-sm">
                  Ejemplo: +569777777
                </span>
                <br />
                <button className="py-3 bg-gray-100 rounded-2xl text-gray-500 w-full mt-4">
                  Quiero que me llamen
                </button>
              </form>
            </div>
            <div className=" hidden md:block">
              <NextImage src={FormIlustration2} />
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h1 className="font-bold text-3xl md:text-4xl md:text-center mt-14">
            Empresas que son parte de <b className="text-primary">Flexit</b>
          </h1>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-6 mt-12">
            <NextImage src={FallabelaLogo} />
            <NextImage src={MangoLogo} />
            <NextImage src={EtamLogo} />
            <NextImage src={AldoLogo} />
            <NextImage src={AmericaninoLogo} />
            <NextImage src={LaMartinaLogo} />
            <NextImage src={JuanValdezLogo} />
            <NextImage src={ClarksLogo} />
            <NextImage src={CalzedoniaLogo} />
            <NextImage src={CartesLogo} />
          </div>
        </section>

        <figure className="my-20 w-full flex items-center justify-center">
          <NextImage alt="Aplicación de Flexit" src={MockupPantallas} />
        </figure>

        <section id="preguntas-frecuentes">
          <h2 className="text-4xl text-center font-extrabold text-black">
            Preguntas frecuentes
          </h2>

          <div className="my-16">
            <FrequencyQuestions />
          </div>
        </section>
      </div>
    </div>
  );
};
