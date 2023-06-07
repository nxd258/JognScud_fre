
    import React, { useState } from "react";
import "./htkh/global.css";
import "./htkh/index.css";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import { radioClasses } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const axios = require("axios");
const AddEventHTKH = () => {const [checked, setChecked] = useState(true);
  const [value, setValue] = React.useState(2);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const textarea = document.querySelector("textarea");
    return(
        <>
<div className="hi-tho-khoa-hc">
  <img
    className="htkh"
    alt=""
    src="./public/htkh.png"
  />
  <div className="statushtkh">
    <b className="stt">STATUS</b>
    <div className="ctystatus">
    <Checkbox
                id="ct"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">CÔNG TY</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="canhanstt">
    <Checkbox
                id="ct"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">CÁ NHÂN</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="tcnnstt">
    <Checkbox
                id="ct"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">TỔ CHỨC NHÀ NƯỚC</div>
    </div>
  </div>
  <div className="purporhtkh">
    <b className="pp">PURPOR</b>
    <div className="cckt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">CUNG CẤP KIẾN THỨC</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div className="taocohoi">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="to-c-hi">TẠO CƠ HỘI MỚI ĐỂ MỖI CÁ NHÂN ĐƯỢC TRAO ĐỔI</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="tlvtnkt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="tho-lun-v">THẢO LUẬN VÀ TIẾP NHẬN KIẾN THỨC</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="banve">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">BÁN VÉ</div>
    </div>
    <div className="divider">
      <div className="divider-child2" />
    </div>
    <div className="mkt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">MARKETING THƯƠNG HIỆU</div>
    </div>
  </div>
  <div className="detailhtkh">
    <b className="dt">DETAIL</b>
    <div className="cckt">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">GIFT</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div className="taocohoi">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="to-c-hi">INVITATIONCARD</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="tlvtnkt">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="tho-lun-v">THANK CARD</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="banve">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">FOOD</div>
    </div>
    <div className="divider">
      <div className="divider-child2" />
    </div>
    <div className="mkt">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">DRINK</div>
    </div>
    <div className="detailhtkh-child" />
    <div className="mkt">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">RECREATIONAL</div>
    </div>
  </div>
  <div className="listguesthtkh">
    <b className="lg">LISTGUEST</b>
    <div className="cckt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">GIÁO SƯ</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div className="tiensi">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">TIẾN SĨ</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="tlvtnkt">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">BÊN TRUYỀN THÔNG</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="banve">
    <Checkbox
    id="checkbox_sv"
    typeof="radio"
    onChange={handleChange}
    inputProps={{"aria-label": "controlled"}}
    /> 
      <div className="cng-ty">SINH VIÊN</div>
    </div>
  </div>
  <div className="scopehtkh">
    <b className="sc">SCOPE</b>
    <div className="publicscope">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">PUBLIC</div>
    </div>
    <div className="divider">
      <div className="divider-child10" />
    </div>
    <div className="privatescope">
    <Checkbox
                id="pl"
                typeof="radio"
                // checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">PRIVATE</div>
    </div>
  </div>
  <div className="scripthtkh">
    <b className="scr">SCRIPT</b>
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
    <div >
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
  <div className="numbercustomerhtkh">
    <b className="nbc">Number Customer</b>
    <div className="mot-tram">
    <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">100</div>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div className="tram">
    <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">300</div>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="tram1">
    <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">500</div>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div className="ngan">
    <Checkbox
                id="0"
                typeof={radioClasses}
                //checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
      <div className="cng-ty">1000</div>
    </div>
  </div>
  <div className="customerhtkh">
    <b className="ctm">CUSTOMER</b>
    <div className="ctystatus">
      <div className="cng-ty">NAME</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="canhanstt">
      <div className="cng-ty">PHONE</div>
    </div>
    <div className="divider">
      <div className="divider-child" />
    </div>
    <div className="tcnnstt">
      <div className="cng-ty">EMAIL</div>
    </div>
  </div>
  <div className="locationhtkh">
    <b className="lct">LOCATION</b>
    <div ><input
                id="namel"
                className="kanban-card9-1"
                placeholder="NAME"
              ></input>
    </div>
    <div className="divider">
      <div className="divider-inner" />
    </div>
    <div >
    <input
                id="ad"
                className="kanban-card17-1"
                placeholder="Address"
              ></input>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div >
    <input
                id="capacity"
                className="kanban-card11-1"
                placeholder="CAPACITY"
                type="number"
              ></input>
    </div>
    <div className="divider">
      <div className="divider-child1" />
    </div>
    <div >
    <input
                id="acreage"
                className="kanban-card12-1"
                placeholder="ACREAGE"
              ></input>
    </div>
    <div className="divider">
      <div className="rectangle-div" />
    </div>
    <div className="cc" >
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

    <div className="cl" >
    <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Rate Security</Typography>
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
    <div className="dmm" >
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
  <div className="timelinehtkh">
    <b className="cng-ty">Time Line</b>
    <div className="divider">
      <div className="divider-child10" />
    </div>
    <div className="texttimeline" />
  </div>
  <div>
  <input
              className="timehtkh"
              style={{ width: "150px" }}
              type="number"
              placeholder="TIME"
            ></input> 
  
  </div>
  <div>
  <textarea
              className="concepthtkh"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="CONCEPT"
              rows="4"
            ></textarea>
  </div>
  <div>
  <textarea
              className="themehtkh"
              // className="sinh-vin"
              style={{ fontSize: 15 }}
              placeholder="THEME"
              rows="4"
            ></textarea>
    
    
  </div>
  {/* <div className="time-start">
    Time Start:<input type="time" className="time-start3"></input>
  </div> */}
  <div className="time-done">
  Time Start:<input type="time" className="time-start2"></input>

    Time Done:<input type="time" className="time-start2"></input>
  </div>
  
</div>


        </>
    )};
    export default AddEventHTKH;


  
  
