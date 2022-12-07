import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";

const HomePage = () => {
  const user = localStorage.getItem("user");
  const [data, setData] = useState(null);

  let num = 0;

  //   useEffect(() => {
  //     // setNumber(1);
  //   });

  //   useEffect(() => {
  //     // setNumber(number+1);

  //   }, [number]);

  //   useEffect(() => {}, []);
  const getData = () => {
    // mock api call

    setData([{}, {}]);
  };

//   useEffect(() => {
//     if (!data) {
//        redirect("/login");
//     }
//      redirect("/calculate");
//   }, [data]);

  return (
    <>
      HomePage
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      {user && <Link to="/calculate">Calculate</Link>}
      <button onClick={() => getData()}>Login user</button>
      {/* <h1>{number}</h1> */}
      <h1>{num}</h1>
      {data ? <h1>DAta </h1> : <h1>No data</h1>}
    </>
  );
};

export default HomePage;
