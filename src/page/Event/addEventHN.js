import React, { useState } from "react";
import "./hn/global.css";
import "./hn/index.css";
import img from "./hn/public/hoinghi.png";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import { radioClasses } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const axios = require("axios");
const AddEventHN = () => {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = React.useState(2);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const textarea = document.querySelector("textarea");
  return (
    <>
  <div className="hi-ngh">
  <img
    className="hoinghi"
    alt=""
    src={img}
  />
  <div className="customer">  
    <b className="customer1">CUSTOMER</b>
    <div>
    <input
         id="nameofcustomer"
         className="name"
         placeholder="name"
    ></input>
    
    </div>
    <div className="divider">
              <div className="divider-inner" />
              </div>
  
    <div>
    <input
        id="phoneofcustomer" 
        className="phone"
        placeholder="phone"       
        ></input>
    </div>
    <div className="divider">
              <div className="divider-inner" />
            </div>
    <div>
    
     <input
          id="mailofcustomer"
          className="email"
          placeholder="email">
          </input>
    </div>
  </div>
  <div className="detail">
            <b className="list-guest-an">DETAIL</b>

            <textarea
              className="gift"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="GIFT"
              rows="4"
            ></textarea>
            <div className="divider">
              <div className="divider-child15" />
            </div>
            <div className="invitationcard1">
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
            <div className="thank-card">
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
              className="food"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="FOOD"
              rows="4"
            ></textarea>

            <div className="divider">
              <div className="divider-child24" />
            </div>

            <textarea
              className="drink"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="DRINK"
              rows="4"
            ></textarea>

            <div className="kanban-card-child" />

            <textarea
              className="drink"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="RECREATIONAL"
              rows="4"
            ></textarea>
          </div>
  <div className="list-guest">
    <b className="customer1">LIST GUEST</b>
    <div className="cqnn">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="c-quan-nh">CƠ QUAN NHÀ NƯỚC</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div className="nhapp">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 

      <div className="c-quan-nh">NHÀ PHÂN PHỐI</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="dttt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="c-quan-nh">ĐỐI TÁC TRUYỀN THÔNG</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="bentt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="c-quan-nh">BÊN TRUYỀN THÔNG</div>
    </div>
    <div className="divider">
      <div className="divider-child2" />
    </div>
    <div className="daili">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="c-quan-nh">ĐẠI LÍ</div>
    </div>
  </div>
  <div className="script">
  
    <b className="customer1">SCRIPT</b>
    <div> 
    <textarea
              className="host"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="HOST"
              rows="4"
            ></textarea>
      
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div>
    <textarea
              className="EVENTPLANNER"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="EVENTPLANNER"
              rows="4"
            ></textarea> 
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div>
    <textarea
              // className="sinh-vin"
              className="mc"
              style={{ fontSize: 15 }}
              placeholder="MC"
              rows="4"
            ></textarea>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div>
    <textarea
              className="issue"
              style={{ fontSize: 15 }}
              placeholder="ISSUE"
              rows="4"
            ></textarea>
    </div>
    <div className="divider">
      <div className="divider-child2" />
    </div>
    <div >
    <textarea
                className="butget"
                // className="sinh-vin"
                style={{ fontSize: 15 }}
                placeholder="BUTGET"
                rows="4"
              ></textarea>
    </div>
  </div>
  <div className="number-customer">
    <b className="customer1">Number Customer</b>
    <div className="div999">
    <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">100</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>   
    <div className="div2">
    <Checkbox
                id="300"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">300</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="div4">
    <Checkbox
                id="500"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">500</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="div6">
    <Checkbox
                id="1000"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">1000</div>
    </div>
    <div className="divider">
      <div className="divider-child14" />
    </div>
  </div>
  <div className="sttan">
            <b className="stt">STATUS</b>
            <div className="cti">
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
            <div className="canhan">
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
            <div className="tcnn">
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
  <div className="timeline">
    <b className="c-quan-nh">Time Line</b>
    <div className="divider">
      <div className="divider-child15" />
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
  {/* <div className="time-start">
    Time Start:<input type="time" className="time-start2"></input>
  </div> */}
  <div className="time-done">
   Time Start:<input type="time" className="time-start2"></input>
    Time Done:<input type="time" className="time-start2"></input>
  </div>
  <div className="status">
    <b className="customer1">STATUS</b>
    <div className="cty">
    <Checkbox
                id="ct"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">CÔNG TY</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="canhan">
    <Checkbox
                id="cn"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">CÁ NHÂN</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="tcnn">
    <Checkbox
                id="tcnn"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">TỔ CHỨC NHÀ NƯỚC</div>
    </div>
  </div>
  <div className="scope">
    <b className="customer1">SCOPE</b>
    <div className="public">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">PUBLIC</div>
    </div>
    <div className="divider">
      <div className="divider-child15" />
    </div>
    <div className="private">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="c-quan-nh">PRIVATE</div>
    </div>
  </div>
  <div >
  <input
              className="time"
              style={{ width: "150px" }}
              type="number"
              placeholder="TIME"
            ></input>
  </div>
  <div> 
  <textarea
              className="concept"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="CONCEPT"
              rows="4"
            ></textarea>
            
  </div>
  <div> 
  <textarea
              className="theme"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="THEME"
              rows="4"
            ></textarea>
  </div>
  <div className="kanban-card53_1">
            <b className="list-guest-an">LOCATION</b>
            <div>
              <input
                id="namel"
                className="kanban-card9-1"
                placeholder="NAME"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child15-1" />
            </div>
            <div>
              <input
                id="ad"
                className="kanban-card17-1"
                placeholder="Address"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child18-1" />
            </div>
            <div>
              <input
                id="capacity"
                className="kanban-card11-1"
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
                className="kanban-card12-1"
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
              <div className="divider-child21-1" />
            </div>
            <div>
              <input
                id="acreage"
                className="kanban-card12-1"
                placeholder="ACREAGE"
              ></input>
            </div>
            <div className="divider">
              <div className="divider-child18-1" />
            </div>
            <div className="kanban-card58-1">
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
            <div className="kanban-card59-1" style={{ color: "#FFE569" }}>
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
            <div className="kanban-card60-1">
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
            
          </div>
        </div>        
</div>

    </>
  )};
export default AddEventHN;
