import { Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" end>Home</Link>
        </li>
        <li>
          <Link to="add">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
