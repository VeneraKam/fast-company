import React, { useState } from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const [active, setActive] = useState(bookmark);

  const handleToggle = (active) => {
    setActive(!active);
  };

  return (
    <>
      {
        <i
          className={"bi bi-bookmark-check" + (active ? "-fill" : "")}
          onClick={() => handleToggle(active)}
        />
      }
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
};

export default Bookmark;
