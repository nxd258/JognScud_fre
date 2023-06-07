import "./css/style.css";
import "./css/montserrat-font.css";
import useUserActions from "../../model/auth";
import { pink } from "@mui/material/colors";
import { useRef, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Register = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      register1();
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);
  function register1() {
    const username = document.getElementById("username").value;
    const name =
      document.getElementById("first_name").value +
      " " +
      document.getElementById("last_name").value;
    const email = document.getElementById("your_email").value;
    const password = document.getElementById("password").value;
    const address =
      document.getElementById("street").value +
      document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const today = new Date();
    const age = Math.floor(
      (today - document.getElementById("dob").value) /
        (365.25 * 24 * 60 * 60 * 1000)
    );
    const image = document.getElementById("avt").value;

    useUserActions.Register(
      username,
      password,
      name,
      age,
      phone,
      email,
      address,
      image
    );
    //useUserActions.SetAvatar(document.getElementById("avt").value);
  }
  return (
    <div style={{ height: "100000px" }}>
      {/* &lt;&gt; */}
      <div className="page-content">
        <div className="form-v10-content">
          <div className="form-detail" action="#" method="post" id="myform">
            <div className="form-left">
              <h2>General Infomation</h2>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="file"
                    name="avt"
                    id="avt"
                    className="input-text"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="input-text"
                    placeholder="First Name"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-row form-row-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="input-text"
                    placeholder="Last Name"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-row form-row-2">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="Date of birth"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <div className="form-row form-row-3">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="username"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-row form-row-3">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="password"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-right">
              <h2>Contact Details</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="street"
                  className="street"
                  id="street"
                  placeholder="Street + Nr"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="form-row">
                <select name="country" id="country" value={""}>
                  <option value="country">Country</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="India">India</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down" />
                </span>
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="phone"
                  className="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  className="input-text"
                  required=""
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  placeholder="Your Email"
                  defaultValue={""}
                />
              </div>
              <div className="form-checkbox">
                <label className="container1">
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[50],
                      "&.Mui-checked": {
                        color: pink[50],
                      },
                    }}
                  />
                  <p>
                    I do accept the{" "}
                    <a href="#" className="text">
                      Terms and Conditions
                    </a>{" "}
                    of your site.
                  </p>
                </label>
              </div>
              <div className="form-row-last">
                <input
                  type="button"
                  name="register"
                  className="register"
                  defaultValue="Register Badge"
                  ref={ref}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
