import type { NextPage } from "next";
import { Image } from "../../Image";

import MobileFlexitImg from "../../../../public/svg/flexit-mobile.svg";
import GirlIllustration from "../../../../public/illustration/girl.png";
import PeopleSelectionIllustration from "../../../../public/illustration/people-selection.svg";
import FlexitPreview1Illustration from "../../../../public/illustration/flexit-preview-1.png";
import FlexitPreview2Illustration from "../../../../public/illustration/flexit-preview-2.png";
import { StoresBadges } from "../../StoresBadges";
import { Icon } from "../../Icon";

export const HomePage: NextPage = () => {
  return (
    <div>
      <section>
        <div className="bg-primary md:px-8 pt-8 flex flex-col items-center md:block rounded-primary">
          <h1 className="text-white text-5xl md:text-8xl text-center md:text-left font-bold">
            ¡Súmate hoy <br /> a Flexit!
          </h1>

          <div className="md:flex w-full">
            <div className="w-2/5 hidden md:flex flex-col justify-center pr-4 bg-transparent">
              <p className="my-8 text-black font-normal leading-5">
                Encuentra ofertas de trabajo que se ajustan a tus tiempos, de
                forma rápida y flexible.
              </p>

              <StoresBadges />
            </div>
            <div
              style={{ height: 320 }}
              className="w-full md:w-3/5 relative mt-8 flex items-center justify-center"
            >
              <Image alt="Flexit" src={MobileFlexitImg} />
            </div>
          </div>
        </div>

        <div
          style={{}}
          className="flex md:hidden flex-col justify-center items-center bg-transparent"
        >
          <p className="my-8 text-black font-normal text-center leading-5">
            Encuentra ofertas de trabajo que se ajustan a tus tiempos, de forma
            rápida y flexible.
          </p>

          <StoresBadges />
        </div>
      </section>

      <section className="my-8 flex flex-wrap">
        <div
          style={{ height: 320 }}
          className="w-full md:w-1/2 relative mt-8 flex items-center justify-center"
        >
          <Image alt="Ilustración de chica" src={GirlIllustration} />
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-black">
            Quiero ser parte de <span className="text-deepGreen">Flexit</span>
          </h2>
          <p className="mt-8 mb-4 text-black font-normal leading-5">
            Sumándote a Flextit podrás:
          </p>

          <div className="flex flex-wrap justify-between">
            <article
              style={{ width: 145 }}
              className="flex mt-4 flex-col items-center justify-center"
            >
              <div
                style={{ width: 70, height: 70 }}
                className="bg-lightGreen p-4 rounded-primary flex items-center justify-center"
              >
                <Icon icon="Clock" />
              </div>

              <p className="text-center">Elegir tus horarios y preferencias</p>
            </article>

            <article
              style={{ width: 145 }}
              className="flex mt-4 flex-col items-center justify-center"
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
              className="flex mt-4 flex-col items-center justify-center"
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
              className="flex mt-4 flex-col items-center justify-center"
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

          <div className="mt-8 flex justify-center">
            <StoresBadges />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap-reverse">
        <div>
          <h2 className="text-4xl font-extrabold text-black">
            Quiero ser una empresa{" "}
            <span className="text-deepGreen">Flexit</span>
          </h2>
          <p className="mt-8 mb-4 text-black font-normal leading-5">
            Si formas parte de una empresa y necesitas a trabajadores a tiempo
            parcial, Flexit puede ser la solución.
          </p>

          <div className="flex flex-wrap justify-between">
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

              <p className="text-center">Eficiencia de costos</p>
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

          {/* <div className="mt-8">
          <button className="rounded-primary bg-black text-white p-4 w-full">
            Agendar reunión
          </button>
        </div> */}
        </div>
        <div
          style={{ height: 320 }}
          className="w-full md:w-1/2  relative mt-8 flex items-center justify-center"
        >
          <Image alt="Ilustración de chica" src={PeopleSelectionIllustration} />
        </div>
      </section>
      {/*
      <figure className="my-16 flex items-center justify-center">
        <Image alt="Ilustración de chica" src={FlexitPreview1Illustration} />
        <Image alt="Ilustración de chica" src={FlexitPreview2Illustration} />
      </figure>

      <section>
        <h2 className="text-4xl text-center font-extrabold text-black">
          Preguntas frecuentes
        </h2>
      </section> */}
    </div>
  );
};
