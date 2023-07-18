import React from "react";
import { useProfessions } from "../../hooks/useProfession";
import PropTypes from "prop-types";

const Profession = ({ id }) => {
    const { isLoading, getProfession } = useProfessions();
    let name = "";
    if (id) {
        const prof = getProfession(id);
        name = prof.name;
    }
    if (!isLoading) {
        return <p>{name}</p>;
    } else return "Loading...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
