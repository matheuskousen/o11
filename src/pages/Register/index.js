import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../servers/api";
import logo from "../../assets/logo.svg";
import "./style.css";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [senha, setSenha] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();
    console.log(senha);
    const data = {
      name,
      email,
      senha,
      whatsapp,
      city,
      uf,
    };
    const getaviso = document.querySelector(".aviso");
    try {
      // eslint-disable-next-line
      const response = await api.post("/ongs", data);

      getaviso.innerHTML = "Seu cadastro foi concluido com sucesso";
      history.push("/register");
    } catch (err) {
      getaviso.innerHTML = "Você precisa preencher os campos";
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro para ter acesso, a plataforma e ajuda as pessoas
            encontar casos da sua ong
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <p className="aviso"></p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
          />
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />
          <div className="input-group">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />

            <input
              value={uf}
              placeholder="UF"
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
