import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./style.css";

// IMPORT THE FROM  api
import api from "../../servers/api";
// LOGOS
import heros from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";
export default function Logon() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    // const data = {
    //   id,
    // };

    const getalert = document.querySelector(".aviso");

    try {
      const response = await api.post("/sessions", { email, senha });
      localStorage.setItem("ongId", email);
      localStorage.setItem("ongSenha", senha);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      getalert.innerHTML = "Seu email ou sua senha esta incorreto";
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="be the hero" />
        {/* FORM */}
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
          />

          <p className="aviso"></p>
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img className="backgrounimg" src={heros} alt="Heroes" />
    </div>
  );
}
