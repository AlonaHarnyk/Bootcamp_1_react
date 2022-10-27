import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "redux/users/users-operations";

export const AddForm = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
    dispatch(addUser({ name, email }));
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
      <button>Add user</button>
    </form>
  );
};
