"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//CSS
import "../css/home.css";

//Images
import logo from "../img/logo.png";

//Components:
import Carrusel from "@/components/home/Carrusel";

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

function Home() {
  const [loginChange, setLoginChange] = useState("Inicio");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

            {loginChange == "Inicio" ? (
              <div id="Inicio">
                <p className="fw-700 fs-2 text-white mt-4">
                  ¿Ya tienes cuenta?
                </p>
                <div className="mx-3 mt-4">
                  <button
                    onClick={() => setLoginChange("Login")}
                    className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5 me-5"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    onClick={() => setLoginChange("Crear cuenta")}
                    className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
                  >
                    Crear cuenta
                  </button>
                </div>
              </div>
            ) : null}

            {loginChange == "Login" ? (
              <div id="Login" className="b-radius-8 shadow background-purple mt-5 text-start">
                <div className="cursor-pointer fs-2 me-3 ms-2 mt-2 text-white">
                  {isHovered ? (
                    <IoArrowBack
                      onClick={() => {
                        setLoginChange("Inicio");
                        handleMouseLeave();
                      }}
                      onMouseLeave={handleMouseLeave}
                    />
                  ) : (
                    <IoIosArrowBack onMouseEnter={handleMouseEnter} />
                  )}
                </div>

                <div className="px-5 pb-4 pt-3 text-center">
                  <p className="fw-700 fs-2 text-white">Iniciar sesión</p>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">
                      Usuario o Correo electrónico
                    </label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Contraseña</label>
                  </div>

                  <div className="mt-4 text-end d-flex justify-content-between align-items-center">
                    <Link
                      href="/"
                      className="mb-0 text-white me-5 text-decoration-none"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>

                    <button
                      onClick={() => setLoginChange("Login")}
                      className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
                    >
                      Acceder
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {loginChange == "Crear cuenta" ? (
              <div id="Crear" className="b-radius-8 shadow background-purple mt-5 text-start">
                <div className="cursor-pointer fs-2 me-3 ms-2 mt-2 text-white">
                  {isHovered ? (
                    <IoArrowBack
                      onClick={() => {
                        setLoginChange("Inicio");
                        handleMouseLeave();
                      }}
                      onMouseLeave={handleMouseLeave}
                    />
                  ) : (
                    <IoIosArrowBack onMouseEnter={handleMouseEnter} />
                  )}
                </div>

                <div className="px-5 pb-4 pt-1 text-start text-white">
                  <p className="fw-700 fs-2 text-white">Crear cuenta</p>

                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Nombre
                    </label>
                    <input
                      class="form-control"
                      id="name"
                      placeholder="Nombre(s)"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="lastname" class="form-label">
                      Apellido
                    </label>
                    <input class="form-control" id="lastname" />
                  </div>

                  

                  <div class="mb-3">
                    <p className="mb-0">Estatus</p>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Soltero(a)
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Casado(a)
                      </label>
                    </div>
                  </div>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Genero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">Otro</option>
                  </select>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Foto de perfil
                    </label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>

                  <div className="mt-4 text-end d-flex justify-content-between align-items-center">
                    <Link
                      href="/"
                      className="mb-0 text-white me-5 text-decoration-none"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>

                    <button
                      onClick={() => setLoginChange("Login")}
                      className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
                    >
                      Acceder
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
