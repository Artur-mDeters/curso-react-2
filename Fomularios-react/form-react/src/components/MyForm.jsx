/* eslint-disable no-unreachable */
import "./MyForm.css";
import  PropTypes  from  'prop-types' 

import { useState } from "react";

const MyForm = ({userName , userEmail}) => {
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const handleName = (e) => {
        setName(e.target.value);
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, name);

        // limpar form

        setName("")
        setEmail("")
    }



    return (
    <div>
      {/* Criação de form */}
      {/* ENVIO DE FORMULÁRIO */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome completo..."
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo Input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            id="email"
            placeholder="Entre com seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );

  MyForm.propTypes = {
    userName: PropTypes.node,
    userEmail: PropTypes.node,
  }
};

export default MyForm;
