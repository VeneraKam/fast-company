import React from "react";

const UserImg = () => {
  return (
    <>
      {" "}
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
          .toString(36)
          .substring(7)}.svg`}
        alt="avatar"
      />
    </>
  );
};

export default UserImg;
