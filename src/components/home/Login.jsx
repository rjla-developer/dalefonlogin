"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

//Material UI
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Avatar from "@mui/material/Avatar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Alert from '@mui/material/Alert';

function Login() {
  const [loginChange, setLoginChange] = useState("Inicio");
  const [isHovered, setIsHovered] = useState(false);
  const [messageForm, setmessageForm] = useState("none")
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const handleInputDate = (date) => {
    setDataUser({
      ...dataUser,
      date: date,
    });
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setDataUser({
        ...dataUser,
        image: imageUrl,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

  const comprobationUser =()=>{
    const dataUsers = JSON.parse(localStorage.getItem("users"));
    dataUsers.map((e)=>{
      if (e.user == dataUser.user && e.password == dataUser.password) {
        setmessageForm("success-user")
        setTimeout(() => {
          setmessageForm("none");
        }, 5000);
      }else{
        setmessageForm("danger-user")
        setTimeout(() => {
          setmessageForm("none");
        }, 5000);
      }
    })
  }

/*   useEffect(() => {
    console.log(localStorage.getItem("users"))
    console.log(dataUser)
  
    return () => {
    }
  }, [dataUser]) */
  
/*   // Para eliminar todos los elementos del localStorage
localStorage.clear(); */

  return (
    <>
      {loginChange == "Inicio" ? (
        <div id="Inicio">
          <p className="fw-700 fs-2 text-white mt-4">¿Ya tienes cuenta?</p>
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

      {loginChange == "Cambiar contra" ? (
        <div
          id="Change password"
          className="b-radius-8 shadow background-purple mt-5 text-start"
        >
          <div className="cursor-pointer fs-2 me-3 ms-2 mt-2 text-white">
            {isHovered ? (
              <IoArrowBack
                onClick={() => {
                  setLoginChange("Login");
                  handleMouseLeave();
                }}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <IoIosArrowBack onMouseEnter={handleMouseEnter} />
            )}
          </div>

          <div className="px-5 pb-4 pt-3 text-center">
            <p className="fw-700 fs-2 text-white mb-4">Cambiar contraseña</p>
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
                className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
              >
                Cambiar
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {loginChange == "Login" ? (
        <div
          id="Login"
          className="b-radius-8 shadow background-purple mt-5 text-start"
        >
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
            <p className="fw-700 fs-2 text-white mb-4">Iniciar sesión</p>
            <div className="mb-3">
              <TextField
                fullWidth
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
              <Link
                onClick={()=>{comprobationUser()}}
                href="/dashboard"
                className="btn-home shadow b-radius-8 txt-color-purple text-decoration-none d-flex align-items-center justify-content-center"
              >
                <p className="fw-500 fs-5 mb-0">Acceder</p>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {loginChange == "Crear cuenta" ? (
        <div
          id="Crear"
          className="b-radius-8 shadow background-purple mt-3 text-start mb-4"
        >
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
          <form onSubmit={handleRegistration}>
            <div className="px-5 pb-4 pt-1 text-start text-white">
              <p className="fw-700 fs-2 text-white">Crear cuenta</p>

              <div className="row mt-3">
                <div className="col-12 d-flex justify-content-center mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="fileInput">
                    <Avatar
                      className="bg-white"
                      src={dataUser.image}
                      sx={{ width: 100, height: 100, cursor: "pointer" }}
                    >
                      <AiOutlineCloudUpload className="fs-1 text-black" />
                    </Avatar>
                  </label>
                </div>

                <div className="col-6 mb-3">
                  <TextField
                    required
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-6 mb-3">
                  <TextField
                    required
                    label="Apellido(s)"
                    variant="outlined"
                    name="lastname"
                    id="lastname"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Correo eléctronico o Nombre de usuario"
                    variant="outlined"
                    name="user"
                    id="user"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    id="password"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <p>Fecha de nacimiento *</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="date"
                      id="date"
                      value={dayjs("2000-04-17")}
                      onChange={(newValue) => {
                        handleInputDate(newValue.$d.toLocaleDateString());
                      }}
                    />
                  </LocalizationProvider>
                </div>

                <div className="col-12 mb-3">
                  <FormControl>
                    <FormLabel className="text-white" id="radius-group gender">
                      Género *
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="radius-group gender"
                      name="gender"
                      id="gender"
                      onChange={handleInputChange}
                    >
                      <FormControlLabel
                        value="Femenino"
                        control={<Radio />}
                        label="Femenino"
                      />
                      <FormControlLabel
                        value="Masculino"
                        control={<Radio />}
                        label="Masculino"
                      />
                      <FormControlLabel
                        value="Otro"
                        control={<Radio />}
                        label="Otro"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className="col-12 mb-3">
                  <FormControl>
                    <FormLabel className="text-white" id="radius-group status">
                      Estatus *
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="radius-group status"
                      name="status"
                      id="status"
                      onChange={handleInputChange}
                    >
                      <FormControlLabel
                        value="casado"
                        control={<Radio />}
                        label="Casado(a)"
                      />
                      <FormControlLabel
                        value="soltero"
                        control={<Radio />}
                        label="Soltero(a)"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="mt-4 text-end d-flex justify-content-end align-items-end">
                <button
                  type="submit"
                  /* onClick={() => {
                    console.log(localStorage.getItem("users"));
                  }} */
                  className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
                >
                  Registrarte
                </button>
              </div>
            </div>
          </form>
          
        </div>
      ) : null}

    {messageForm == "success" ? <Alert className="message-form" severity="success"><span className="fw-bold">Registrado</span>, ¡Disfruta de la experiencia Dalefon!</Alert> : null}
    {messageForm == "warning" ? <Alert className="message-form" severity="warning">Por favor, complete todos los campos obligatorios.</Alert> : null}
      
    {messageForm == "success-user" ? <Alert className="message-form" severity="success"><span className="fw-bold">Iniciando sesión.</span></Alert> : null}
    {messageForm == "danger-user" ? <Alert className="message-form" severity="error">Usuario no encontrado, favor de verificar datos.</Alert> : null}
    </>
  );
}

export default Login;
