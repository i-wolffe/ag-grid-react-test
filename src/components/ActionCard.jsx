import React from "react";
import { Link } from "react-router-dom";

export const ActionCard = ({children, ...props}) => {
  return (<div className="Action-card d-flex">
    <div className="Card-title">
      {/* <h2>{props.title}</h2> */}
      {children[0]}
    </div>
    <div className="Card-icon d-flex">
      <span className="my-icon">
        {children[1]}
      </span>
    </div>
    <div className="Card-body">
      <div className="Card-text">
        {children[3]}
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
      </div>
      <div className="Card-cta">{/* Call to Action. Bind to parent? */}
        <Link to={props.to}>
          <button type="button" className="Cta-button">
            <span className="Btn-text">
              Continuar
            </span>
            <span className="Btn-icon">
            {children[2]}
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>);
}

export default ActionCard;