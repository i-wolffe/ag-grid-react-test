import React from "react";

export const ActionCard = ({children, ...props}) => {
  return (<div className="Action-card d-flex">
    <div className="Card-title">
      {/* <h2>{props.title}</h2> */}
      {children[0]}
    </div>
    <div className="Card-icon">
      <span className="my-icon">
        {children[1]}
      </span>
    </div>
    <div className="Card-body">
      <div className="Card-text">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="Card-cta">{/* Call to Action. Bind to parent? */}
        <button type="button">
          <span className="Btn-icon">
            icon
          </span>
          <span className="Btn-text">
            Go!
          </span>
        </button>
      </div>
    </div>
  </div>);
}

export default ActionCard;