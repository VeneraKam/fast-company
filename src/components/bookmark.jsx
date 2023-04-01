import React, { useState } from "react";

const Bookmark = () => {
  const [active, setActive] = useState(false);

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
