import React from "react";

const Qualitie = ({ color, name, _id }) => {
  const getClassSpan = (color) => {
    return "badge bg-" + color;
  };

  return (
    <span key={_id} className={getClassSpan(color)}>
      {name}
    </span>
  );
};

export default Qualitie;
