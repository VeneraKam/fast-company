import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        let text = (
            <span className="badge bg-primary">
                {number + " человек тусанет с тобой сегодня"}
            </span>
        );
        if (number === 0) {
            text = (
                <span className="badge bg-danger">
                    Никто с тобой не тусанет
                </span>
            );
        } else if (
            (number < 5 || number > 21) &&
            (number % 10 === 2 || number % 10 === 3 || number % 10 === 4)
        ) {
            text = (
                <span className="badge bg-primary">
                    {number + " человека тусанут с тобой сегодня"}
                </span>
            );
        }
        return text;
    };

    return (
        <>
            <h2>{renderPhrase(length)}</h2>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
