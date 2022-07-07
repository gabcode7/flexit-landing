import React, { useState } from "react";
import { Icon } from "../Icon";

interface IQuestion {
  question: string;
  awnser: string | string[];
}

const Question = ({ question, awnser }: IQuestion) => {
  const [showAawnser, setShowAawnser] = useState<boolean>(false);
  return (
    <div
      onClick={() => setShowAawnser(!showAawnser)}
      className="border border-black rounded-primary p-4"
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-lg md:text-xl w-5/6">{question}</h3>
        <div
          className="w-1/6 flex justify-end items-start"
          style={{ width: 50, height: 50 }}
        >
          <Icon
            className={`cursor-pointer  ${
              showAawnser ? "rotate-180" : "rotate-0"
            }`}
            icon="ArrowDown"
          />
        </div>
      </div>

      <div className={`mt-4 ${!showAawnser ? "hidden " : "block"}`}>
        {typeof awnser === "string" ? (
          <p className="mt-4">{awnser}</p>
        ) : (
          <div>
            {awnser.map((el, index) => (
              <ul className="list-disc ml-4" key={index}>
                <li>{el}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const FrequencyQuestions = () => {
  return (
    <div className="grid justify-center grid-cols-1  gap-4">
      <Question
        question="¿Cómo funciona Flexit?"
        awnser={`Para registrarte debes completar tus datos básicos, subir tus documentos y pasar por una video entrevista a cargo de nuestro equipo de selección. 
Una vez que te registres, puedes tomar todas las ofertas que quieras, siempre cuando no tengan tope de horario. 
Nuestra App seleccionará a los mejores candidatos, según el desempeño de la entrevista
Finalmente firmarás el contrato de forma electrónica y recibirás toda la información necesaria para partir tu jornada Flexit.  `}
      />

      <Question
        question="¿Qué necesito para ser parte de Flexit?"
        awnser={[
          "Ser mayor de 18 años.",
          "Tener aceso a internet móvil.",
          "Certificado de enseñanza media.",
          "Si eres extranjero, también debes contar on el certificado de residencia.",
        ]}
      />

      <Question
        question="¿Qué pasa si tengo gratuidad?"
        awnser="Según la Ley 21.164, sobre trabajos parciales para estudiantes, los ingresos que generes en Flexit no afectan a las postulaciones a fondos solidarios, créditos fiscales y/o becas que ayuden a financiar tus estudios.   "
      />

      <Question
        question="¿Qué documentos necesito subir a la plataforma?"
        awnser={[
          "Tu cédula de identidad.",
          "Certificado de estudios (alumno regular).",
          "Certificado de residencia (en caso de ser extranjero).",
          "Certificado de afiliación a Isapre o Fonosa.",
          "Certificado de afiliacón a AFP.",
        ]}
      />

      <Question
        question="¿Qué pasa si no tengo AFP?"
        awnser="Si no tienes AFP, se te asignará aquella que haya ganado la última licitación de la Superintendencia de AFP. 

Puedes descargar tu certificado de no afiliación en el siguiente link https://www.spensiones.cl/apps/certificados/formCertificadoAfiliacion.php "
      />

      <Question
        question="¿Qué pasa si soy carga en Isapre o Fonasa?"
        awnser="En este caso, debes subir un certificado que constate tu nombre y calidad de carga. Para Fonasa, ingresa a Fonasa.cl / Fonasa / perfil y descargar tu certificado. "
      />
    </div>
  );
};
