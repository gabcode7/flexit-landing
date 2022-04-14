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
      className="border border-black rounded-primary p-4 w925:border-0 w925:"
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-xl w-5/6">{question}</h3>
        <div
          className="w-1/6 flex justify-end"
          style={{ width: 50, height: 50 }}
        >
          <Icon
            className={`cursor-pointer w925:hidden ${
              showAawnser ? "rotate-180" : "rotate-0"
            }`}
            icon="ArrowDown"
          />
        </div>
      </div>

      <div className={`mt-4 w925:block ${!showAawnser ? "hidden " : "block"}`}>
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
    <div className="grid justify-center grid-cols-1 w925:grid-cols-2 gap-4">
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
        question="¿Qué documentos tengo que subir?"
        awnser={[
          "Tu cédula de identidad.",
          "Certificado de estudios (alumno regular).",
          "Certificado de residencia (en caso de ser extranjero).",
          "Certificado de afiliación a Isapre o Fonosa.",
          "Certificado de afiliacón a AFP.",
        ]}
      />

      <Question
        question="¿Qué pasa si tengo gratuidad?"
        awnser="Según la ley 21165 sobre trabajos parciales para estudiantes, los ingresos que generes en Flexit no deberían afectar las postulaciones a fondos solidarios, créditos fiscales universitarios ni becas que ayuden a financiar tus estudios. "
      />

      <Question
        question="¿Qué pasa si soy carga en Isapre o Fonasa?"
        awnser="En este caso, debes subir un certificado que constate tu nombre y calidad de carga. Para Fonasa, ingresa a Fonasa.cl->Mi Fonasa->Mi perfil y descargar tu certificado. "
      />

      <Question
        question="¿Qué pasa si no tengo AFP?"
        awnser="Si no tienes AFP, se te asignará aquella que haya ganado la última licitación de la Superintendencia de AFP, que actualmente corresponde a la AFP Uno. Además, debes descargar el certificado de no afiliación en el siguiente link."
      />

      <Question
        question="¿Por qué es importante marcar tus jornadas en el reloj control?"
        awnser="Es importante que marques tu entrada y salida al inicio y final de tu jornada para que las horas trabajadas efectivamente se asignen a tu sueldo. No debes marcar cuando sales almorzar. Si tienes dudas de sueldos haz clic aquí. "
      />
    </div>
  );
};
