import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">LogOut</Link>
        </li>
      </ul>
    </nav>
  );
}
