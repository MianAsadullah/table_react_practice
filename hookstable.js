import React, { useState, useEffect } from "react";
import axios from "axios";

const Hookstable = (props) => {
  const [users, setusers] = useState([]);
  const [newusers, setnewusers] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
        setnewusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const sorty = (list) => [...list].sort((a, b) => (a.name < b.name ? -1 : 1));
  const handleSort = (key) => {
    const usersList = sorty(users);
    debugger;
    setnewusers(usersList);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>list of User</h1>
      <button
        onClick={() => {
          handleSort("name");
        }}
      >
        SORT BY ID
      </button>
      <button>SORT BY NAME</button>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {newusers.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Hookstable;
