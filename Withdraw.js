import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router";
import { useRef } from "react";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;


export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ amount: -1 * inputRef.current.value })
    body: JSON.stringify({ 'amount': '-1' })
  };

  // useEffect(() => {
      // fetch(BASE_API_URL + '/api/'+ user, requestOptions).then(res => res.json()).then(data => {
      // fetch(BASE_API_URL + '/api/'+ '1', requestOptions).then(res => res.json()).then(data => {
      //   setAmount(data.amount_taken);
      // });
    // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
  }

  return (
    <div>
      <p>Daily Withdrawal Limit: {}</p>
      <div></div>
      <p>Total amount withdrawn:
      </p>
      <div></div>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Amount to withdraw: </p>
        <input ref={inputRef} type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div></div>
    <Link to="/Logout">Logout</Link>
    </div>
    //flash to let know if it was successful
    //link back to balance screen if successful, else this page again
  );
}



//   // useEffect(() => {
//   //   (async () => {
//   //     const response = await fetch(BASE_API_URL + '/tryUser/1');
//   //     if (response.ok) {
//   //       const results = await response.json();
//   //       setPerson(results.name);
//   //     }
//   //     //else {
//   //       //setPerson(null);
//   //     //}
//   //   })();
//   // }, []);
//   useEffect(() => {
//     fetch(BASE_API_URL + '/profile/me').then(res => res.json()).then(data => {
//       setMyamt(data.profile);
//     });
//   }, []);