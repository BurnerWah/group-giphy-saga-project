import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to= "/favorites">
        <li>Favorites</li>
      </Link>
    </ul>
  );
}
