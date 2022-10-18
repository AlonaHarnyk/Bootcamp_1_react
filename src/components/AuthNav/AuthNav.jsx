import { useContext } from "react";
import { AuthContext } from "context/context";

import { Notification } from "components/Notification/Notitfication";
import { LoginForm } from "components/LoginForm/LoginForm";
import { Button } from "components/Button/Button";

export const AuthNav = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Notification text="You are welcome" />
      <Button text="Log out" clickHandler={logout} />
    </>
  ) : (
    <LoginForm />
  );
};
