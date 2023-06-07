import { Outlet, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "./images/logo.jpg";
import avatar from "../../controller/setAvatar";

import z from "./images/avatar/z.jpg";
import y from "./images/avatar/y.jpg";
import x from "./images/avatar/x.jpg";
import t from "./images/avatar/t.jpg";
import s from "./images/avatar/s.jpg";
import r from "./images/avatar/r.jpg";
import p from "./images/avatar/p.jpg";
import o from "./images/avatar/o.jpg";
import n from "./images/avatar/n.jpg";
import m from "./images/avatar/m.jpg";
import l from "./images/avatar/l.jpg";
import k from "./images/avatar/k.jpg";
import j from "./images/avatar/j.jpg";
import i from "./images/avatar/i.jpg";
import d from "./images/avatar/d.jpg";
import e from "./images/avatar/e.jpg";
import f from "./images/avatar/f.jpg";
import g from "./images/avatar/g.jpg";
import h from "./images/avatar/h.jpg";
import c from "./images/avatar/c.jpg";
import b from "./images/avatar/b.jpg";
import a from "./images/avatar/a.jpg";
import "./css/style.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
const Layout = () => {
  let avata = avatar("Ngo");
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
      title: "View profile",
      to: "/@dat",
    },

    {
      icon: (
        // <FontAwesomeIcon
        //   icon={icon({ name: "user-secret" })}
        //   className="icon1"
        // />
        <FontAwesomeIcon icon="fa-solid fa-house" />
      ),
      title: "Settings",
      to: "/settings",
    },
    {
      icon: (
        // <FontAwesomeIcon
        //   icon={icon({ name: "user-secret" })}
        //   className="icon1"
        // />
        <FontAwesomeIcon icon="fa-solid fa-house" />
      ),
      title: "Log out",
      // to:'/logout',
      to: "/login",
    },
  ];
  useEffect(() => {
    const myCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("myCookie="))
      ?.split("=")[1];

    const myElement = document.getElementById("myElement");

    if (myCookie === "hidden") {
      myElement.style.display = "none";
    } else {
      myElement.style.display = "block";
    }
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };
  return (
    <html lang="en">
      <body>
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <img id="logo1" src={logo}></img>
                  <a href="index.html" class="logo">
                    Jogn-Scud
                  </a>
                  <ul className="nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="scroll-to-section">
                      <Link to="/Event">Event</Link>
                    </li>
                    <li className="scroll-to-section">
                      <Link to="/Login">Login</Link>
                    </li>
                    <li class="has-sub">
                      <Link to="/">Home</Link>
                      <ul className="sub-menu">
                        <li id="myElement">
                          <a href="meetings.html">Log Out</a>
                        </li>
                        <li>
                          <a href="meeting-details.html">Meeting Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="scroll-to-section">
                      {(() => {
                        console.log(avata);
                        if (avata == "a") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={a} />
                            </Stack>
                          );
                        }
                        if (avata == "b") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={b} />
                            </Stack>
                          );
                        }
                        if (avata == "c") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={c} />
                            </Stack>
                          );
                        }
                        if (avata == "e") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={e} />
                            </Stack>
                          );
                        }
                        if (avata == "f") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={f} />
                            </Stack>
                          );
                        }
                        if (avata == "g") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={g} />
                            </Stack>
                          );
                        }
                        if (avata == "h") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={h} />
                            </Stack>
                          );
                        }
                        if (avata == "i") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={i} />
                            </Stack>
                          );
                        }
                        if (avata == "k") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={k} />
                            </Stack>
                          );
                        }
                        if (avata == "l") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={l} />
                            </Stack>
                          );
                        }
                        if (avata == "m") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={m} />
                            </Stack>
                          );
                        }
                        if (avata == "n") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={n} />
                            </Stack>
                          );
                        }
                        if (avata == "o") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={o} />
                            </Stack>
                          );
                        }
                        if (avata == "p") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={p} />
                            </Stack>
                          );
                        }
                        if (avata == "d") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={d} />
                            </Stack>
                          );
                        }
                        if (avata == "j") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={j} />
                            </Stack>
                          );
                        }
                        if (avata == "r") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={r} />
                            </Stack>
                          );
                        }
                        if (avata == "s") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={s} />
                            </Stack>
                          );
                        }
                        if (avata == "t") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={t} />
                            </Stack>
                          );
                        }
                        if (avata == "x") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={x} />
                            </Stack>
                          );
                        }
                        if (avata == "y") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={y} />
                            </Stack>
                          );
                        }
                        if (avata == "z") {
                          return (
                            <Stack direction="row" spacing={2}>
                              <Avatar alt="Remy Sharp" src={z} />
                            </Stack>
                          );
                        }
                      })()}
                    </li>
                    <li>
                      <FontAwesomeIcon icon="faCoffee" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </body>
    </html>
  );
};

export default Layout;
