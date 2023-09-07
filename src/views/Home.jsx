import React from "react";
import ActionCard from "../components/ActionCard";

import Button from "react-bootstrap/Button";

import { BiLogIn,BiLogOut,BiDetail,BiSend } from 'react-icons/bi'
import { GiMechanicalArm } from 'react-icons/gi'
import { CgSmartHomeHeat } from 'react-icons/cg'

export const Home = (props) => {
  return (
    <div className="Content-container">
      <div className="Login-bar d-flex-r">
      <Button variant="outline-primary">
        { props.isLogin
          ? 
            <span className="Login-icon">
              <BiLogOut />
              <span>Logout</span>
            </span>
          :
            <span className="Login-icon">
              <BiLogIn />
              <span>Login</span>
            </span>
        }
        </Button>
      </div>
      <div className="Card-container d-flex-r">
          <ActionCard to="/register/cell/add">
            <h2>Registro de Celdas</h2>
            <GiMechanicalArm />
            <BiSend />
            <p>Agregar al registro un nuevo modelo de manguera para trabajar en una celda</p>
          </ActionCard>
          <ActionCard to="/register/auto/add">
            <h2>Registro de Autoclaves</h2>
            <CgSmartHomeHeat />
            <BiSend />
            <p>Agregar una nueva autoclave para monitorear</p>
          </ActionCard>
          <ActionCard to="/manager/">
            <h2>Consultar Documentos</h2>
            <BiDetail />
            <BiSend />
            <p>Administrar los registros diarios y semanales transferido de las celdas y autoclaves</p>
          </ActionCard>
      </div>
    </div>
  );
};
