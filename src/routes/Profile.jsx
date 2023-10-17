import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const Profile = () => {
  const history = useHistory();
  const noLogoutHandler = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={noLogoutHandler}>logout</button>
    </>
  );
};
export default Profile;
