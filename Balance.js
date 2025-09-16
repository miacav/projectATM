import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Balance() {

  const [balance, setBalance] = useState();
  const { id } = useParams();

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(BASE_API_URL + '/tryUser/1');
  //     if (response.ok) {
  //       const results = await response.json();
  //       setPerson(results.name);
  //     }
  //     //else {
  //       //setPerson(null);
  //     //}
  //   })();
  // }, []);
  // useEffect(() => {
  //   fetch(BASE_API_URL + '/api/' + id).then(res => res.json()).then(data => {
  //     setBalance(data.balance);
  //   });
  // }, []);

  return (
    <p>
      <div>My balance: ${balance}</div>
      <Button href="http://localhost:3000/Withdraw" variant="primary">
      Withdraw
      </Button>
      <div><Button href="http://localhost:3000/Deposit" target="_blank" variant="primary">
      Deposit
      </Button></div>
      <Link to="/Logout">Logout</Link>
    </p>
    //button to go to withdraw screen
    //button to go to deposit screen
  );
}