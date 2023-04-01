import React, { useState } from "react";

const Bookmark = ({ bookmark }) => {
  const [active, setActive] = useState(bookmark);

  const handleChoose = (active) => {
    setActive(!active);
  };

  return (
    <>
      {
        <i
          className={"bi bi-bookmark-check" + (active ? "-fill" : "")}
          onClick={() => handleChoose(active)}
        />
      }
    </>
  );
};

export default Bookmark;
