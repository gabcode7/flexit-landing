import { RequestOptions, ServerResponse } from "http";
const nodemailer = require("nodemailer");

import {
  API_KEY,
  EMAIL,
  EMAIL_PASSWORD,
  INCOMING_SERVER,
  SMTP_PORT,
} from "../../config";

type RequestBody = {
  name: string;
  company: string;
  email: string;
  phone: string;
  acceptCallback: boolean;
};

const sendMail = async (request: any, response: ServerResponse) => {
  if (request.headers.api_key !== API_KEY) {
    response.statusCode = 403;
    response.end("Access Denied");
  }

  if (request.method === "POST") {
    const { name, company, email, phone, acceptCallback }: RequestBody =
      request.body;
    console.log(request.body);

    const contentHTML = `
			<h1>Nueva solicitud de una empresa para acceder a Flexit</h1>

			<ol>
				<li>Nombre: ${name}</li>
				<li>Empresa: ${company}</li>
				<li>Correo electronico: ${email}</li>
				<li>Telefono: ${phone}</li>
			</ol>

			<p>Este usuario ${acceptCallback ? "acepta" : "no acepta"} recivir llamadas</p>
		`;

    const transporter = nodemailer.createTransport({
      host: INCOMING_SERVER,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: EMAIL,
        password: EMAIL_PASSWORD,
      },
    });

    const sendResponse = await transporter.sendMail({
      from: "Gaspar Dolcemascolo <gaspardolcemascolo@gmail.com>",
      to: "gaspardolcemascolo@gmail.com",
      subject: "Formulario de contacto, Flexit Landing",
      text: "Hello",
    });
    console.log(
      "🚀 ~ file: send-mail.ts ~ line 47 ~ sendMail ~ sendResponse",
      sendResponse
    );

    if (sendResponse) {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Email enviado",
        })
      );
    }

    response.statusCode = 500;
    response.end(
      JSON.stringify({
        message: "Internal Server Error",
      })
    );
  }
};

export default sendMail;
