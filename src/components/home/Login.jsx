"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

//Material UI
import TextField from "@mui/material/TextField";

//Components
import CreateAccount from "./CreateAccount";
import ArrowBack from "./ArrowBack";
import MessagesForm from "./MessagesForm";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [loginChange, setLoginChange] = useState("Inicio");
  const [messageForm, setmessageForm] = useState("none");
  const [dataUser, setDataUser] = useState({
    name: "",
    lastname: "",
    user: "",
    password: "",
    date: "",
    gender: "",
    status: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    if (
      dataUser.name === "" ||
      dataUser.lastname === "" ||
      dataUser.email === "" ||
      dataUser.password === "" ||
      dataUser.gender === "" ||
      dataUser.status === "" ||
      dataUser.image === null
    ) {
      setmessageForm("warning");
      setTimeout(() => {
        setmessageForm("none");
      }, 5000);
      return;
    }

    console.log("Formulario válido");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(dataUser);
    localStorage.setItem("users", JSON.stringify(users));
    setDataUser({
      name: "",
      lastname: "",
      user: "",
      password: "",
      date: "",
      gender: "",
      status: "",
      image: null,
    });
    setLoginChange("Login");
    setmessageForm("success");
    setTimeout(() => {
      setmessageForm("none");
    }, 5000);
  };

  const comprobationUser = (event) => {
    event.preventDefault();
    const dataUsers = JSON.parse(localStorage.getItem("users"));
    dataUsers.map((e) => {
      if (e.user == dataUser.user && e.password == dataUser.password) {
        setmessageForm("success-user");
        setTimeout(() => {
          setmessageForm("none");
        }, 5000);
        router.push(`/${dataUser.user}` /* , query:{dataUser2: dataUser} */);
      } else {
        setmessageForm("danger-user");
        setTimeout(() => {
          setmessageForm("none");
        }, 5000);
      }
    });
  };

  /* useEffect(() => {
    console.log(localStorage.getItem("users"));
    console.log(dataUser);

    return () => {};
  }, [dataUser]); */

  /*   // Para eliminar todos los elementos del localStorage
localStorage.clear(); */

  return (
    <>
      {loginChange == "Inicio" ? (
        <>
          <div className="mt-3">
            <div className="d-none d-xl-block mx-3">
              <p className="fw-700 fs-2 text-white">¿Ya tienes cuenta?</p>
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

            <div className="d-block d-xl-none">
              <p className="fw-700 fs-4 text-white">¿Ya tienes cuenta?</p>
              <button
                onClick={() => setLoginChange("Login")}
                className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-6 me-5"
              >
                Acceder
              </button>
              <button
                onClick={() => setLoginChange("Crear cuenta")}
                className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-6"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="b-radius-8 shadow background-purple mt-3 text-start mb-4">
          {loginChange == "Crear cuenta" ? (
            <>
              <ArrowBack
                setLoginChange={(e) => setLoginChange(e)}
                dir={"Inicio"}
              />
              <CreateAccount
                handleRegistration={(e) => handleRegistration(e)}
                dataUser={dataUser}
                handleInputChange={(e) => {
                  handleInputChange(e);
                }}
                setDataUser={(e) => {
                  setDataUser(e);
                }}
              />
            </>
          ) : null}

          {loginChange == "Login" ? (
            <>
              <ArrowBack
                setLoginChange={(e) => setLoginChange(e)}
                dir={"Inicio"}
              />
              <div className="px-5 pb-4 pt-3 text-center">
                <p className="fw-700 fs-2 text-white mb-4">Iniciar sesión</p>
                <form onSubmit={comprobationUser}>
                  <div className="mb-3">
                    <TextField
                      fullWidth
                      required
                      id="login-email"
                      label="Correo eléctronico o Nombre de usuario"
                      variant="outlined"
                      name="user"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      fullWidth
                      required
                      id="login-password"
                      label="Contraseña"
                      type="password"
                      autoComplete="current-password"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mt-4 text-end d-flex justify-content-between align-items-center">
                    <p
                      onClick={() => setLoginChange("Cambiar contra")}
                      className="cursor-pointer mb-0 text-white me-5 text-decoration-none"
                    >
                      ¿Olvidaste tu contraseña?
                    </p>
                    <button
                      type="submit"
                      className="btn-home shadow b-radius-8 txt-color-purple text-decoration-none d-flex align-items-center justify-content-center"
                    >
                      <p className="fw-500 fs-5 mb-0 d-none d-xl-block">Acceder</p>
                      <p className="fw-500 fs-6 mb-0 d-block d-xl-none">Acceder</p>
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : null}

          {loginChange == "Cambiar contra" ? (
            <>
              <ArrowBack
                setLoginChange={(e) => setLoginChange(e)}
                dir={"Login"}
              />
              <div className="px-5 pb-4 pt-3 text-center">
                <p className="fw-700 fs-2 text-white mb-4">
                  Cambiar contraseña
                </p>
                <div className="mb-3">
                  <TextField
                    fullWidth
                    id="login-email-cambiar"
                    label="Correo eléctronico o Nombre de usuario"
                    variant="outlined"
                  />
                </div>
                <div className="mb-3">
                  <TextField
                    fullWidth
                    id="login-password-cambiar"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <div className="mb-3">
                  <TextField
                    fullWidth
                    required
                    id="login-password2-cambiar"
                    label="Confirmar contraseña"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>

                <div className="mt-4 text-end d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    onClick={() => setLoginChange("Login")}
                    className="btn-home shadow b-radius-8 d-none d-xl-block txt-color-purple fw-500 fs-5"
                  >
                    Cambiar
                  </button>
                  <button
                    type="submit"
                    onClick={() => setLoginChange("Login")}
                    className="btn-home shadow b-radius-8 d-block d-xl-none txt-color-purple fw-500 fs-6"
                  >
                    Cambiar
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      )}

      <MessagesForm messageForm={messageForm} />
    </>
  );
}

export default Login;
