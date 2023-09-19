import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import logo from "./Imagen de WhatsApp 2023-09-18 a las 22.19.58.jpg";
import otrologo from "./Vector.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="bodyy">
    <header className="header">
      <img src={logo} style={{ width: "180px", height: "64" }}></img>
      <div>
        <button className="loginsignup" style={{ backgroundColor: "#ffff" }}>
          Iniciar sesión
        </button>
        <button className="loginsignup">Registrarse</button>
      </div>
    </header>
    <div className="navbar">
      <input
        className="busqueda"
        placeholder="Buscar mas productos"
        id="busqueda"
        name="busqueda"
      ></input>

      <a className="a" href="productos">
        Productos
      </a>
      <a className="a" href="historial">
        Historial
      </a>
      <a className="a" href="sobre">
        Sobre Nosotros
      </a>
      <a className="a" href="contacto">
        Contacto
      </a>
    </div>

    <div className="login">
      <form className="Form">
        <img src={otrologo} style={{ height: "56" }}></img>
        <input
          className="loginform"
          type="text"
          placeholder="Correo electronico"
          id="correo"
          name="correo"
          required
        ></input>
        <input
          className="loginform"
          type="password"
          placeholder="Contraseña"
          id="pass"
          name="pass"
          required
        ></input>
        <button
          className="loginsignup"
          type="enviar"
          value="Enviar"
          style={{ backgroundColor: "#FFF4DA", marginLeft: "0px" }}
        >
          Iniciar sesión
        </button>

        <form style={{ alignItems: "center" }}>
          <div style={{ color: "#FFF4DA", fontSize: "20px" }}>
            Iniciar sesión con Google
            <hr style={{ width: "100%", color: "#FFF4DA" }}></hr>
          </div>
          <a href="google">
            <button className="botongoogle">Google</button>
          </a>
        </form>

        <a href="" style={{ fontSize: "20px", color: "#FFF4DA" }}>
          ¿Has olvidado tu contraseña?
        </a>
      </form>

      <div className="opciona">
        ¿No tienes cuenta?
        
      </div>
    </div>
  </div>
);
