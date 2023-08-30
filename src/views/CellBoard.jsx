import React from 'react'

export const CellBoard = () => {
  return (
    <div className="Content-container">
      <div className="Action-container">
        <span>Active: <i className="Active-model">%MODELO%</i></span>
        <span>Objetivo de producción: <span className="Target-prod">%NUM%</span> /hora</span>
        <span>Tiempo por pieza: <span className="Target-time">%NUM%</span> minutos</span>
        <span>
          <button className="Action-button" type="button" id="btn-clear">Vaciar</button>
          <button className="Action-button" type="button" id="btn-export">Exportar</button>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Horas</th>
            <th>Modelo</th>
            <th>Producción Real</th>
            <th>Tiempo muerto</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>Software Engineer</td>
            <td>Software Engineer</td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Accountant</td>
          </tr>
          <tr>
            <td>Bill Jones</td>
            <td>40</td>
            <td>Doctor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
