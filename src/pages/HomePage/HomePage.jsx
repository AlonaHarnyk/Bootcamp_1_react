import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "redux/users/users-selectors";
import { deleteUser, updateUser } from "redux/users/usersSlice";
import Avatar from "react-avatar";

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, age, id, status }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>
              <Avatar round={true} size={40} name={name} />
            </td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
              <span onClick={() => dispatch(updateUser(id))}>
                {status === "yes" ? "online" : "offline"}
              </span>
            </td>
            <td>
              <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// import { deleteUser, updateUser } from "redux/users/usersSlice";
// import Avatar from "react-avatar";
// import { connect } from "react-redux";

// const HomePage = ({ users, deleteUser, updateUser }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Avatar</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Status</th>
//           <th>Option</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(({ name, age, id, status }, index) => (
//           <tr key={id}>
//             <td>{index + 1}</td>
//             <td>
//               <Avatar round={true} size={40} name={name} />
//             </td>
//             <td>{name}</td>
//             <td>{age}</td>
//             <td>
//               <span onClick={() => updateUser(id)}>
//                 {status === "yes" ? "online" : "offline"}
//               </span>
//             </td>
//             <td>
//               <button onClick={() => deleteUser(id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const mapStateToProps = (state) => ({
//   users: state.users.users,
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteUser: (id) => dispatch(deleteUser(id)),
//   updateUser: (id) => dispatch(updateUser(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
