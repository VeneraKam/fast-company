import React from "react";
import PropTypes from "prop-types";

const Quality = ({ qualities }) => {
  return (
    <>
      {qualities.map((quality) => (
        <span
          key={quality._id}
          className={"badge bg-" + quality.color + " m-2"}
        >
          {quality.name}
        </span>
      ))}
    </>
  );
};

Quality.propTypes = {
  qualities: PropTypes.array.isRequired,
};

export default Quality;
