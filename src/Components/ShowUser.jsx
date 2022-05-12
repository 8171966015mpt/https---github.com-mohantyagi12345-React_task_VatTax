import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const ShowUser = () => {
  const [user, setUser] = useState([]);
  const [check, setCheck] = useState(false);
  const url = `https://randomuser.me/api`;
  let username2, emialID, pic, genderIs, contact,firstname,lastName;

  const fetchUser = () => {
    axios.get(url).then((response) => {
      let res = response.data.results;
      localStorage.setItem("user_details", JSON.stringify(res));
      setUser(res);
    });
  };
  const refreshPage = () => {
    setCheck(!check);
  };
  useEffect(() => {
    fetchUser();
    localStorage.setItem("user_details", JSON.stringify(user));
  }, [check, username2]);
  if (JSON.parse(localStorage.getItem("user_details")) != null) {
    let user2 = JSON.parse(localStorage.getItem("user_details"));
    const {
      name:{first,last},
      email,
      phone,
      gender,
      login: { username },
      picture: { large },
    } = user2[0];
    firstname = first;
    lastName = last;
    username2 = username;
    emialID = email;
    pic = large;
    genderIs = gender;
    contact = phone;
  }
console.log("fullname",firstname)
console.log("last",lastName)
  return (
    <div>
      <img style={{ width: "20%", height: "20%" }} src={pic} alt="picture" />
     <h1>FullName: {firstname + " " +  lastName}</h1>
      <h1> username : {username2} </h1>
      <h1> email: {emialID} </h1>
      <h1> gender : {genderIs} </h1>
      <h1> phone : {contact} </h1>

      <br />
      <button onClick={refreshPage}> change user</button>
    </div>
  );
};
