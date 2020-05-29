import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromAPI();
  }, []);

  const getUsersFromAPI = async () => {
    const res = await axios.get("https://api.github.com/users");
    const userInfo = res.data;

    console.log(userInfo);
    setUsers(userInfo);
  };
  return (
    <div className="container">
      <h1 className="user_head">List of all the users.</h1>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-6">
            <SingleUser user={user} key={user.username} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
