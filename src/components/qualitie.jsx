import React from "react";
import PropTypes from "prop-types";

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

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualitie;
