import React, { useState, useEffect } from "react";
import axios from "axios";

const UserInfo = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(props.match.params.username);
  }, []);

  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    const usr = res.data;
    console.log(usr);
    setUser(usr);
  };
  return (
    <div className="userinfo_sec">
      <h1 className="text-center">Individual user info</h1>
      <div class="card">
        <img src={user.avatar_url} alt="User Image" className="img_prop1" />
        <div class="card-body">
          <h4 class="card-title">{user.name}</h4>
          <p class="card-text">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
