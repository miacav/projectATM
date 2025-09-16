import { Link } from "react-router";

export default function Logout() {

  //get response code

  return (
    <div>
      <p>You have logged out!</p>
      <div></div>
      <Link to="/Login">Log Back In</Link>
    </div>
  );
}