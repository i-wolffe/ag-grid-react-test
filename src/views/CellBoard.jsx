import React from 'react'

export const CellBoard = () => {
  return (
    <div className="Content-container">
      <div className="Action-container">
        <span>Modelo: <i className="Active-model">%MODELO%</i></span>
        <span>Pzas x hora: <span className="Target-prod">%NUM%</span></span>
        <span>Num. Operadores <span className="Target-time">%NUM%</span></span>
        <span>
          <button className="Action-button" type="button" id="btn-clear">Vaciar</button>
          <button className="Action-button" type="button" id="btn-export">Exportar</button>
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Horas</th>
            <th>Modelo</th>
            <th>Producción Real</th>
            <th>Acumulado</th>
            <th>Tiempo muerto</th>
            <th>Motivo</th>
            <th>Status</th>
            <th>Firma Supervisor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>06:00 - 07:00</td>
            <td>370952E</td>
            <td>60</td>
            <td>60</td>
            <td>20</td>
            <td><input type="text" name="" id="Motivo-1" /></td>
            <td>OK?</td>
            <td><input type="text" name="" id="Firma-1" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>07:00 - 08:00</td>
            <td>370952E</td>
            <td>60</td>
            <td>60</td>
            <td>20</td>
            <td><input type="text" name="" id="Motivo-1" /></td>
            <td>OK?</td>
            <td><input type="text" name="" id="Firma-1" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>08:00 - 09:00</td>
            <td>370952E</td>
            <td>60</td>
            <td>60</td>
            <td>20</td>
            <td><input type="text" name="" id="Motivo-1" /></td>
            <td>OK?</td>
            <td><input type="text" name="" id="Firma-1" /></td>
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
