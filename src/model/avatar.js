// // gui anh tu server len client
// // Server-side code
// const express = require("express");
// const app = express();

// app.get("/image", (req, res) => {
//   const imagePath = "/path/to/image.jpg";
//   res.sendFile(imagePath);
// });

// // Client-side code
// import axios from "axios";

// function ImageComponent() {
//   const [imageSrc, setImageSrc] = useState("");

//   useEffect(() => {
//     axios
//       .get("/image")
//       .then((response) => setImageSrc(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return <img src={imageSrc} alt="example" />;
// }
// import React, { useState } from "react";
// import axios from "axios";
// import React, { useState } from "react";
// const axios = require("axios");
// const FormData = require("form-data");
// let x = {
//   SetAvatar: function () {
//     const [file, setFile] = useState(null);

//     const handleFileUpload = (event) => {
//       setFile(event.target.files[0]);
//     };
//     let data = new FormData();
//     data.append("file", file);
//     // event.preventDefault();

//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:3000/Account/setAvatar",
//       headers: {
//         ...data.getHeaders(),
//       },
//       data: data,
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
// };
// export default x;
