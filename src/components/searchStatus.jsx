import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    let text = number + " человек тусанет с тобой сегодня";
    let color = "primary";

    if (number === 0) {
      text = "Никто с тобой не тусанет";
      color = "danger";
    } else if (
      number % 100 === 12 ||
      number % 100 === 13 ||
      number % 100 === 14
    ) {
      text = number + " человек тусанет с тобой сегодня";
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      text = number + " человекa тусанет с тобой сегодня";
    }
    return <span className={"badge bg-" + color}>{text}</span>;
  };

  return <h1>{renderPhrase(length)}</h1>;
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
