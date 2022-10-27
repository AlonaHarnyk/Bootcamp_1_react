import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "redux/users/users-selectors";
import { deleteUser } from "redux/users/users-operations";

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <ul>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
