import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "redux/users/users-selectors";
import { deleteUser } from "redux/users/users-actions";

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, age, id }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
              <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
