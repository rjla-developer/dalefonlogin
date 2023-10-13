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

        <div className="col-12 col-xl-5 order-first order-xl-last mt-4 mt-xl-0">
          <div className="text-center">
            <div className="d-block d-xl-none">
              <Image src={logo} width={50} height={50} alt="logo-Dalefon" />
            </div>
            <div className="d-none d-xl-block">
              <Image src={logo} width={130} height={130} alt="logo-Dalefon" />
            </div>
           
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
