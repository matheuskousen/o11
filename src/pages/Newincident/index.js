import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../servers/api";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import logo from "../../assets/logo.svg";

export default function Newincident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();
  async function hendlenewincident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push("/profile");
    } catch (err) {
      alert("erro ao cadastra");
    }
  }

  return (
    <div className="newincident">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar pagina inicial
          </Link>
        </section>
        <form onSubmit={hendlenewincident}>
          <input
            placeholder="Title do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
