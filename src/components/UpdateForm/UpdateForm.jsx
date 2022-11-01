import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/users/users-operations";

export const UpdateForm = ({ user, closeForm }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ ...user, name, email }));
    setName("");
    setEmail("");
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
