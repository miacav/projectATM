import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router";
import { useRef } from "react";



const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Login() {

  const [status, setStatus] = useState(1);
  const inputRef = useRef(null);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({ amount: inputRef.current.value })
    body: JSON.stringify({ 'email': 'mia@fgtv.com', 'password': '123' })
    };
  // const { id } = useParams();

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

  useEffect(() => {
    fetch(BASE_API_URL + '/login/please', requestOptions).then(res => res.json()).then(data => {
      setStatus(data.status);
    });
  }, []);

  console.log(status)

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>User ID:</label>
    //   <input ref={inputRef} type="text" />
    //   <label>
    //     User PIN:
    //   </label>
    //   <input ref={inputRef} type="text" />
    //   <button type="submit">Submit</button>
    // </form>
    <div>
      <form>
        <div>
          <label htmlFor="username">Customer ID</label>
          <input name="username" placeholder="Customer ID"  />
        </div>
        <div>
          <label htmlFor="password">Customer PIN</label>
          <input name="password" placeholder="1234" />
        </div>
        <input type="submit"  value="Log In"/>
      </form>
    </div>
  );
}