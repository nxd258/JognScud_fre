import React, { useState } from "react";
import "./an/global.css";
import "./an/index.css";

import img1 from "./an/public/eventplanning1024x638-1@2x.png";
import Checkbox from "@mui/material/Checkbox";
import { radioClasses } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const axios = require("axios");
const AddEventAN = () => {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = React.useState(2);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  //

  

  // textarea.addEventListener("input", () => {
  //   textarea.classList.add("expanding");
  //   textarea.style.height = "auto";
  //   textarea.style.height = `${textarea.scrollHeight}px`;
  //   if (textarea.scrollHeight >= 200) {
  //     textarea.style.overflowY = "scroll";
  //   } else {
  //     textarea.style.overflowY = "hidden";
  //   }
  // });
  return (
    <>
      <>
        <div className="m-nhc">
          <img className="event-planning-1024x638-1-icon" alt="" src={img1} />
          <div className="kanban-card">
            <b className="list-guest-an">List guest_AN</b>
            <div className="kanban-card1">
              <Checkbox
                id="checkbox_sv"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">SINH VIÊN</div>
              <div className="divider">
                <div className="divider-item" />
              </div>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div className="kanban-card2">
              <Checkbox
                id="checkbox_w"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">NGƯỜI ĐÃ ĐI LÀM</div>
              <div className="divider">
                <div className="divider-item" />
              </div>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div className="kanban-card3">
              <Checkbox
                id="checkbox_km"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">KHÁCH MỜI</div>
            </div>
          </div>
          <div className="kanban-card4">
            <b className="list-guest-an">CUSTOMER_AN</b>
            <div>
              <input
                id="nameofcus"
                className="kanban-card1"
                placeholder="name"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div>
              <input
                id="phoneofcus"
                className="kanban-card2"
                placeholder="phone"
                type="phone"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div>
              <input
                id="emailofcus"
                className="kanban-card3"
                type="email"
                placeholder="email"
              ></input>
            </div>
          </div>
          <div className="kanban-card8">
            <b className="list-guest-an">DETAIL</b>

            <textarea
              className="kanban-card9"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="GIFT"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child15" />
            </div>
            <div className="kanban-card10">
              <div className="invitationcard">
                <b style={{ fontSize: 15 }}>
                  INVITATIONCARD<br></br>
                  <input placeholder="" type="file"></input>
                </b>
              </div>
            </div>
            <div className="divider">
              <div className="divider-child18" />
            </div>
            <div className="kanban-card11">
              <div className="thank-card">
                <b style={{ fontSize: 15 }}>
                  THANK CARD<br></br>
                  <input placeholder="" type="file"></input>
                </b>
              </div>
            </div>
            <div className="divider">
              <div className="divider-child21" />
            </div>

            <textarea
              className="kanban-card12"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="FOOD"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child24" />
            </div>

            <textarea
              className="kanban-card13"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="DRINK"
              rows="4"
            ></textarea>

            <div className="kanban-card-child" />

            <textarea
              className="kanban-card13"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="RECREATIONAL"
              rows="4"
            ></textarea>
          </div>
          <div className="kanban-card15">
            <b className="list-guest-an">PURPOR_AN</b>
            <div className="kanban-card9">
              <Checkbox
                id="qgtt"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">QUYÊN GÓP TỪ THIỆN</div>
            </div>
            <div className="divider">
              <div className="divider-child15" />
            </div>
            <div className="kanban-card17">
              <Checkbox
                id="scgt"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">SÂN CHƠI GIẢI TRÍ</div>
            </div>
            <div className="divider">
              <div className="divider-child18" />
            </div>
            <div className="kanban-card11">
              <Checkbox
                id="db"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">DEBUT</div>
            </div>
            <div className="divider">
              <div className="divider-child21" />
            </div>
            <div className="kanban-card12">
              <Checkbox
                id="sale"
                typeof="radio"
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">BÁN VÉ</div>
            </div>
            <div className="divider">
              <div className="divider-child40" />
            </div>
          </div>
          <div>
            <input
              className="kanban-card22"
              style={{ width: "150px" }}
              type="number"
              placeholder="TIME"
            ></input>
          </div>
          <div>
            <textarea
              className="kanban-card21"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="CONCEPT"
              rows="4"
            ></textarea>
          </div>
          <div>
            <textarea
              className="kanban-card20"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="THEME"
              rows="4"
            ></textarea>
          </div>
          <form>
            <div className="kanban-card23">
              <b className="list-guest-an">Nameofcustomer_AN</b>
              <Checkbox
                id="100"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="kanban-card24">100</div>
              <div className="divider">
                <div className="divider-child15" />
              </div>
              <Checkbox
                id="300"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="kanban-card25">300</div>
              <div className="divider">
                <div className="divider-child18" />
              </div>
              <Checkbox
                id="500"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />

              <div className="kanban-card26">500</div>
              <div className="divider">
                <div className="divider-child21" />
              </div>
              <Checkbox
                id="1000"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />

              <div className="kanban-card27">1000</div>
              <div className="divider">
                <div className="divider-child40" />
              </div>
            </div>
          </form>
          <div className="kanban-card28">
            <b className="list-guest-an">Độ tuổi nhỏ nhất</b>
            <div className="kanban-card29">
              <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">0</div>
            </div>
            <div className="divider">
              <div className="divider-child15" />
            </div>
            <div className="kanban-card25">
              <Checkbox
                id="14"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">14</div>
            </div>
            <div className="divider">
              <div className="divider-child18" />
            </div>
            <div className="kanban-card26">
              <Checkbox
                id="16"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">16</div>
            </div>
            <div className="divider">
              <div className="divider-child21" />
            </div>
            <div className="kanban-card27">
              <Checkbox
                id="18"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">18</div>
            </div>
            <div className="divider">
              <div className="divider-child40" />
            </div>
          </div>
          <div className="time-donean">
  Time Start:<input type="time" className="time-startan"></input>

    Time Done:<input type="time" className="time-done-an"></input>
  </div>
          <div className="kanban-card38">
            <b className="list-guest-an">SCRIPT</b>

            <textarea
              className="kanban-card9"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="HOST"
              rows="4"
            ></textarea>
            <div className="divider">
              <div className="divider-child15" />
            </div>

            <textarea
              className="kanban-card10"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="EVENTPLANNER"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child18" />
            </div>

            <textarea
              // className="sinh-vin"
              className="kanban-card11"
              style={{ fontSize: 15 }}
              placeholder="MC"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child21" />
            </div>

            <textarea
              className="kanban-card12"
              style={{ fontSize: 15 }}
              placeholder="ISSUE"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child24" />
            </div>
            <div>
              <textarea
                className="kanban-card13"
                // className="sinh-vin"
                style={{ fontSize: 15 }}
                placeholder="BUTGET"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="kanban-card44">
            <b className="list-guest-an">STATUS</b>
            <div className="kanban-card1">
              <Checkbox
                id="ct"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">CÔNG TY</div>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div className="kanban-card2">
              <Checkbox
                id="cn"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">CÁ NHÂN</div>
            </div>
            <div className="divider">
              <div className="divider-inner" />
            </div>
            <div className="kanban-card3">
              <Checkbox
                id="tcnn"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">TỔ CHỨC NHÀ NƯỚC</div>
            </div>
          </div>
          <div className="kanban-card48">
            <b className="list-guest-an">SCOPE</b>
            <div className="kanban-card34">
              <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">PUBLIC</div>
            </div>
            <div className="divider">
              <div className="divider-child73" />
            </div>
            <div className="kanban-card35">
              <Checkbox
                id="pr"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="sinh-vin">PRIVATE</div>
            </div>
            <div className="divider">
              <div className="divider-item" />
            </div>
          </div>
          <div className="kanban-card51">
            <b className="sinh-vin">Time Line</b>
            <div className="divider">
              <div className="divider-child73" />
            </div>
            <textarea
              id="timeline"
              className="kanban-card52"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="write here"
              rows="4"
            ></textarea>
          </div>
          <div className="kanban-card53">
            <b className="list-guest-an">LOCATION</b>
            <div>
              <input
                id="namel"
                className="kanban-card9"
                placeholder="NAME"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child15" />
            </div>
            <div>
              <input
                id="ad"
                className="kanban-card17"
                placeholder="Address"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child18" />
            </div>
            <div>
              <input
                id="capacity"
                className="kanban-card11"
                placeholder="CAPACITY"
                type="number"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child21" />
            </div>
            <div>
              <input
                id="acreage"
                className="kanban-card12"
                placeholder="ACREAGE"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child18" />
            </div>
            <div className="kanban-card58">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Rate Service</Typography>
                <Rating
                  id="service"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="kanban-card59" style={{ color: "#FFE569" }}>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Rate Security</Typography>
                <Rating
                  id="security"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="kanban-card60">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Rate Sound</Typography>
                <Rating
                  id="sound"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="divider">
              <div className="divider-child40" />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default AddEventAN;
