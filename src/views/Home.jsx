import React from "react";
import ActionCard from "../components/ActionCard";

import { BiLogIn,BiLogOut,BiDetail,BiSend } from 'react-icons/bi'
import { GiMechanicalArm } from 'react-icons/gi'
import { CgSmartHomeHeat } from 'react-icons/cg'

export const Home = (props) => {
  return (
    <div className="Content-container">
      <div className="Login-bar d-flex-r">
        <span className="Login-button">
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
        </span>
      </div>
      <div className="Card-container d-flex-r">
          <ActionCard to="/register/cell/add">
            <h2>Registro de Celdas</h2>
            <GiMechanicalArm />
            <BiSend />
          </ActionCard>
          <ActionCard to="/register/auto/add">
            <h2>Registro de Autoclaves</h2>
            <CgSmartHomeHeat />
            <BiSend />
          </ActionCard>
          <ActionCard to="/manager/">
            <h2>Consultar Documentos</h2>
            <BiDetail />
            <BiSend />
          </ActionCard>
      </div>
    </div>
  );
};
