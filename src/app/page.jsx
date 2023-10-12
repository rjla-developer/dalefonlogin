import React from "react";
import Image from "next/image";

//CSS
import "../css/home/home.css";
import "../css/home/crear.css";

//Images
import logo from "../img/logo.png";

//Components:
import Carrusel from "@/components/home/Carrusel";

import Login from "@/components/home/Login";

function Home() {
  /* localStorage.setItem("token", "root");
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: "Roberto Javier",
      lastname: "Luengas Arzate",
      user: "rj_luengas",
      date: "02/12/2000",
      gender: "masculino",
      status: "soltero"
    })
  ); */

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-7 p-0 p-lg-5 my-5 my-lg-0">
          <div className="px-0 px-lg-5 mx-5 pb-0 pb-lg-4">
            <p className="title-home fw-700 mb-3">
              NOVEDADES <br></br> EN DALEFON
            </p>
            <Carrusel />
          </div>
        </div>

        <div className="col-12 d-block d-xl-none text-center mt-3 order-first">
          <Image
            src={logo}
            className=""
            width={50}
            height={50}
            alt="logo-Dalefon"
          />
          <div className="mt-3">
            <button className="btn-home b-radius-8 txt-color-purple fw-500 fs-6 me-5">
              Acceder
            </button>
            <button className="btn-home b-radius-8 txt-color-purple fw-500 fs-6">
              Crear cuenta
            </button>
          </div>
        </div>

        <div className="col-5 d-none d-xl-flex align-items-center justify-content-center my-5 pt-5 my-lg-0 pt-lg-0">
          <div className="text-center my-5 my-lg-0 py-2 py-lg-0">
            <Image src={logo} width={130} height={130} alt="logo-Dalefon" />
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
