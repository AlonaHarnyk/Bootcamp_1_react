import { Link } from "react-router-dom";

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Registaration</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
