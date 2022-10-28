import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualtiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Qualitie key={quality._id} {...quality} />
            ))}
        </>
    );
};

QualtiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualtiesList;
