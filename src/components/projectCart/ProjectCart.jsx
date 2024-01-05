import React from "react";

export const ProjectCart = (props) => {
  return (
    <div>
      {" "}
      <img src={props.image} className="card-img-top" alt="..." />
      <div>
        <h5 className="card-title mt-3">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};
