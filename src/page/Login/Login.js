import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/style.css";
import "./css/style1.css";
import React, { useState } from "react";
// import "./scss/style.scss";
import useUserActions from "../../model/auth";
import { useRef, useEffect } from "react";
import { Message } from "@mui/icons-material";

// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

// import "https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap";

const Login = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  async function loginn(username, password) {
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
        console.log(response.data.success === true);
        setAuthenticated(response.data.success === true);
        if (response.data.success === true)
          setToken(JSON.stringify(response.data.data));
        // console.log();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(authenticated);
  }
  async function handleClick() {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    await loginn(userName, password);
    console.log(authenticated);
    if (authenticated) {
      console.log(token);
      props.history.push("/Register");
    } else {
      console.log("User is not authenticated!");
      <>
        <Message>"User is not authenticated!"</Message>
      </>;
    }
  }
  const [loginToggle, setLoginToggle] = useState(true);
  const toggleHandler = () => {
    setLoginToggle((prevState) => !prevState);
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">
                {loginToggle ? "Login" : "Sign up"}
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-4 text-center">Have an account?</h3>
                {/* <form action="#" className="signin-form"> */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required=""
                    id="userName"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  {/* <Link
                    //to="/"
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                    ref={ref}
                    // onClick={() => this.props.history.push("/")}
                  >
                    Sign In
                  </Link> */}
                  {token !== "" ? (
                    <div>
                      <p>You are logged in</p>
                    </div>
                  ) : (
                    <button
                      className="form-control btn btn-primary submit px-3"
                      onClick={handleClick}
                    >
                      Sign in
                    </button>
                  )}
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">
                      Remember Me
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div class="w-50">
                    <Link to="/Register" class="checkbox-wrap checkbox-primary">
                      Register
                    </Link>
                  </div>

                  <div className="w-50 text-md-right">
                    <a href="#" style={{ color: "#fff" }}>
                      Forgot Password
                    </a>
                  </div>
                </div>
                {/* </form> */}
                <p className="w-100 text-center">— Or Sign In With —</p>
                <div className="social d-flex text-center">
                  <a href="#" className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2" /> Facebook
                  </a>
                  <a href="#" className="px-2 py-2 ml-md-1 rounded">
                    <span className="ion-logo-twitter mr-2" /> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
