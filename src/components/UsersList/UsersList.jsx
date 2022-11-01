import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "redux/users/users-selectors";
import { deleteUser } from "redux/users/users-operations";
import { useState } from "react";
import { UpdateForm } from "components/UpdateForm/UpdateForm";

export const UsersList = () => {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const showUpdateForm = (userId) => {
    const user = users.find(({ id }) => id === userId);
    setUserToUpdate(user);
  };

  const closeForm = () => {
    setUserToUpdate(null)
  }

  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => dispatch(deleteUser(id))}>Delete user</button>
          <button onClick={() => showUpdateForm(id)}>Update user</button>
          {userToUpdate && userToUpdate.id === id && <UpdateForm user={userToUpdate} closeForm={closeForm} />}
        </li>
      ))}
    </ul>
  );
};
