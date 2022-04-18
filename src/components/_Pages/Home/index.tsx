import type { NextPage } from "next";
import { Image } from "../../Image";
import NextImage, { StaticImageData } from "next/image";

import MobileFlexitImg from "../../../../public/svg/flexit-mobile.svg";
import GirlIllustration from "../../../../public/illustration/girl.svg";
import PeopleSelectionIllustration from "../../../../public/illustration/people-selection.svg";
import FlexitPreview1Illustration from "../../../../public/illustration/flexit-preview-1.png";
import FlexitPreview2Illustration from "../../../../public/illustration/flexit-preview-2.png";
import { StoresBadges } from "../../StoresBadges";
import { Icon } from "../../Icon";
import { FrequencyQuestions } from "../../FrequencyQuestions";

export const HomePage: NextPage = () => {
  return (
    <div>
      <section>
        <div className="bg-primary w925:px-8 pt-8 flex flex-col items-center w925:flex w925:flex-row rounded-primary">
          <div className="w-full w925:mr-16 w925:w-2/5">
            <h1 className="text-white text-5xl w925:text-6xl text-center w925:text-left font-bold">
              ¡Súmate hoy <br /> a Flexit!
            </h1>
            <div className="hidden w925:flex flex-col justify-center pr-4 bg-transparent">
              <p className="my-8 text-black font-normal leading-5">
                Encuentra ofertas de trabajo que se ajustan a tus tiempos, de
                forma rápida y flexible.
              </p>

              <StoresBadges />
            </div>
          </div>
          <div className="w-full h-56 w925:w-1/4 w925: relative mt-8 flex items-center justify-center">
            <Image alt="Ilustración de chica" src={MobileFlexitImg} />
          </div>
        </div>

        <div className="flex w925:hidden flex-col justify-center items-center bg-transparent">
          <p className="my-8 text-black font-normal text-center leading-5">
            Encuentra ofertas de trabajo que se ajustan a tus tiempos, de forma
            rápida y flexible.
          </p>

          <StoresBadges />
        </div>
      </section>

      <div className="w925:px-8">
        <section id="personas" className="my-16 flex flex-wrap justify-between">
          <div
            style={{ height: 320 }}
            className="w-full w925:w-1/4 relative mt-8 flex items-center justify-center"
          >
            <Image alt="Ilustración de chica" src={GirlIllustration} />
          </div>

          <div className="mt-8">
            <h2 className="text-4xl font-extrabold text-black">
              Quiero ser parte <br /> de{" "}
              <span className="text-deepGreen">Flexit</span>
            </h2>
            <p className="mt-8 mb-4 text-black font-normal leading-5">
              Sumándote a Flextit podrás:
            </p>

            <div className="flex flex-wrap justify-between w925:justify-start w-full">
              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
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
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
                >
                  <Icon icon="Location" />
                </div>

                <p className="text-center">Acceder a ofertas en todo el país</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
                >
                  <Icon icon="Chronometer" />
                </div>

                <p className="text-center">Obtener contratos por hora</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 mr-3 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
                >
                  <Icon icon="Money" />
                </div>

                <p className="text-center">Recibir pagos semanales</p>
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
            <h2 className="text-4xl font-extrabold text-black">
              Quiero ser una <br /> empresa{" "}
              <span className="text-deepGreen">Flexit</span>
            </h2>
            <p className="mt-8 mb-4 text-black font-normal leading-5">
              Si formas parte de una empresa y necesitas a <br /> trabajadores a
              tiempo parcial, Flexit puede ser la solución.
            </p>

            <div className="flex flex-wrap justify-between w925:justify-start w-full">
              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
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
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
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
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
                >
                  <Icon icon="Chronometer" />
                </div>

                <p className="text-center">Rapidos procesos de selección</p>
              </article>

              <article
                style={{ width: 145 }}
                className="flex mt-4 flex-col items-center justify-center"
              >
                <div
                  style={{ width: 70, height: 70 }}
                  className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
                >
                  <Icon icon="Graphic" />
                </div>

                <p className="text-center">Todo en una sola plataforma</p>
              </article>
            </div>

            <div className="mt-8">
              <button className="w925:w-56 rounded-primary bg-black text-white p-4 w-full">
                Agendar reunión
              </button>
            </div>
          </div>
          <div
            style={{ height: 320 }}
            className="w-full w925:mr-6 w925:w-1/3 relative mt-8 flex items-center justify-center"
          >
            <Image
              alt="Ilustración de chica"
              src={PeopleSelectionIllustration}
            />
          </div>
        </section>

        <figure className="my-16 w-full flex items-center justify-center">
          <NextImage
            width={227.02}
            height={435.27}
            alt="Aplicación de Flexit"
            src={FlexitPreview1Illustration}
          />
          <NextImage
            width={227.02}
            height={435.27}
            alt="Aplicación de Flexit"
            src={FlexitPreview2Illustration}
          />
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
