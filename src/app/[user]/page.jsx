"use client";
import React, { useState } from "react";
import "../../css/user/perfil.css";
import Link from "next/link";

//Material UI
import Avatar from "@mui/material/Avatar";

//Icons
import { AiOutlineCloudUpload } from "react-icons/ai";
import GenderChart from "@/components/user/GenderChart";

function Perfil({ params }) {
  const [contentNav, setContentNav] = useState("Home");
  const [dataUser, setDataUser] = useState({
    name: "Roberto Javier",
    lastname: "Luengas Arzate",
    user: "rj_luengas",
    date: "02/12/2000",
    gender: "masculino",
    status: "soltero",
    image: null,
  });
  const users = [
    {
      name: "Nombre1",
      lastname: "Apellido1",
      user: "Usuario1",
      date: "01/01/2000",
      gender: "Masculino",
      status: "Activo",
    },
    {
      name: "Nombre1",
      lastname: "Apellido1",
      user: "Usuario1",
      date: "01/01/2000",
      gender: "Masculino",
      status: "Activo",
    },
    {
      name: "Nombre1",
      lastname: "Apellido1",
      user: "Usuario1",
      date: "01/01/2000",
      gender: "Masculino",
      status: "Activo",
    },
    {
      name: "Nombre1",
      lastname: "Apellido1",
      user: "Usuario1",
      date: "01/01/2000",
      gender: "Masculino",
      status: "Activo",
    },
    {
      name: "Nombre2",
      lastname: "Apellido2",
      user: "Usuario2",
      date: "02/02/2001",
      gender: "Femenino",
      status: "Inactivo",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      console.log(imageUrl);
      setDataUser({
        ...dataUser,
        image: imageUrl,
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-4 bg-black shadow" style={{ height: "100vh" }}>
          <div
            onClick={() => setContentNav("Home")}
            className="cursor-pointer borde-down text-white "
          >
            <div className="nav-item b-radius-8 d-flex align-items-center">
              <Avatar
                className="bg-white text-black me-3"
                src={dataUser.image}
                sx={{ width: 60, height: 60 }}
              ></Avatar>{" "}
              <p className="fs-5 mb-0">{params.user}</p>
            </div>
          </div>
          <p
            onClick={() => setContentNav("Edit")}
            className="cursor-pointer nav-item b-radius-8 text-white fs-5 mt-4 mb-0"
          >
            Editar perfil
          </p>
          <p
            onClick={() => setContentNav("User")}
            className="cursor-pointer nav-item b-radius-8 text-white fs-5 mb-0"
          >
            Usuarios
          </p>
          <p className="cursor-pointer nav-item b-radius-8 text-white fs-5 mb-0">
            <Link href="/" className="text-decoration-none text-white">
              Cerrar sesión
            </Link>
          </p>
        </div>

        <div className="col d-flex align-items-center justify-content-center ">
          <div className="b-radius-8 background-purple col-7 shadow p-5">
            {contentNav == "Home" ? (
              <div className="row text-white ">
                <div className="col-12 d-flex align-items-center justify-content-center mb-4">
                  <Avatar
                    className="bg-white text-black me-3"
                    src={""}
                    sx={{ width: 120, height: 120, cursor: "pointer" }}
                  ></Avatar>
                </div>
                <div className="col-6">
                  <p>Nombre(s): {dataUser.name}</p>
                </div>
                <div className="col-6">
                  <p>Apellidos: {dataUser.lastname}</p>
                </div>
                <div className="col-6">
                  <p>Usuario: {dataUser.user}</p>
                </div>
                <div className="col-6">
                  <p>Fecha de nacimiento: {dataUser.date}</p>
                </div>
                <div className="col-6">
                  <p>Genero: {dataUser.gender}</p>
                </div>
                <div className="col-6">
                  <p>Estatus: {dataUser.status}</p>
                </div>
              </div>
            ) : null}

            {contentNav == "Edit" ? (
              <div className="row">
                <p className="fs-1 text-white">Editar perfil</p>
                <div className="col-12 d-flex align-items-center justify-content-center mb-4">
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
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Nombre(s):
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={dataUser.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label text-white">
                      Apellidos:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      value={dataUser.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="user" className="form-label text-white">
                      Usuario:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user"
                      name="user"
                      value={dataUser.user}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label text-white">
                      Fecha de nacimiento:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      name="date"
                      value={dataUser.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label text-white">
                      Género:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      name="gender"
                      value={dataUser.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label text-white">
                      Estatus:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      value={dataUser.status}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    onClick={() => {
                      console.log(dataUser);
                    }}
                    className="btn-user shadow b-radius-8 txt-color-purple fw-500 mt-5"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </div>
            ) : null}

            {contentNav == "User" ? (
              <>
                <table className="b-radius-8 table table-bordered">
                  <thead>
                    <tr>
                      <th>Nombre(s)</th>
                      <th>Apellidos</th>
                      <th>Usuario</th>
                      <th>Fecha de nacimiento</th>
                      <th>Género</th>
                      <th>Estatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.user}</td>
                        <td>{user.date}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <GenderChart users={users} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
