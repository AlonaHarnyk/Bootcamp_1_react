import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/users/users-operations";
import { selectIsLoading, selectError } from "redux/users/users-selectors";

import { Button } from "./Button/Button";
import { UsersList } from "./UsersList/UsersList";
import { AddForm } from "./AddForm/AddForm";

import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";

import { logout, fetchCurrentUser } from "../redux/auth/auth-operations";

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const changeVisibility = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  return (
    <>
      <RegisterForm />
      <LoginForm />
      <button onClick={() => dispatch(logout())}>Logout</button>

      {isListShown ? (
        <>
          {isLoading && <h1>LOADING...</h1>}
          <UsersList />
          {!isLoading && <Button text="Add user" clickHandler={showForm} />}
          {isFormShown && <AddForm closeForm={closeForm} />}
        </>
      ) : (
        <Button text="Show list of users" clickHandler={changeVisibility} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};
