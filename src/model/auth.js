import { useSetRecoilState } from "recoil";
import axios from "axios";
// import React from "react";
import React, { useState } from "react";
const FormData = require("form-data");

let n = {
  Register: function (
    username,
    password,
    name,
    age,
    phone,
    email,
    address,
    image
  ) {
    let data = JSON.stringify({
      userName: username,
      passWord: password,
      name: name,
      age: age,
      phone: phone,
      email: email,
      address: address,
      image: image,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/authentication/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  Login: function (username, password) {
    let data = JSON.stringify({
      userName: username,
      passWord: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/authentication/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FogotPassWord: function (email) {
    let data = JSON.stringify({
      email: email,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/authentication/forgotpassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  Logout: function () {
    let data = "";

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/authentication/logout",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  GetUser: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/authentication/me",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default n;
// }
