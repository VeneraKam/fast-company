import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import EditForm from "../components/common/ui/editForm";

const Users = () => {
  const params = useParams();
  const userId = params.userId;
  const edit = params.edit;

  return (
    <>
      {edit ? (
        <EditForm id={userId} />
      ) : userId ? (
        <UserPage userId={userId} />
      ) : (
        <UsersListPage />
      )}
    </>
  );
};

export default Users;
