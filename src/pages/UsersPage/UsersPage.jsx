import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/users/users-operations";
import { selectIsLoading, selectError } from "redux/users/users-selectors";

import { Button } from "components/Button/Button";
import { UsersList } from "components/UsersList/UsersList";
import { AddForm } from "components/AddForm/AddForm";


export const UsersPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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