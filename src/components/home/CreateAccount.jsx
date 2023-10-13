import React from "react";

//Material UI
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

//Icons 
import { AiOutlineCloudUpload } from "react-icons/ai";

function CreateAccount({handleRegistration, dataUser, handleInputChange,setDataUser }) {
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

      const handleInputDate = (date) => {
        setDataUser({
          ...dataUser,
          date: date,
        });
      };
  return (
    <div>
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
              className="btn-home shadow b-radius-8 txt-color-purple fw-500 fs-5"
            >
              Registrarte
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
