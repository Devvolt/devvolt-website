const express = require("express");
const app = express();
//url
app.get("/", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/index.html");
});
app.get("/portfolio/guglieee", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/portfolio/guglieee.html");
});
app.get("/portfolio/genericboi", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/portfolio/genericboi.html");
});

//css

app.get("/css/style.css", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/css/style.css");
});

app.get("/css/diocane.css", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/css/diocane.css");
});
// JS 

app.get("/js/main.js", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/js/main.js");
});

//IMGs 

app.get("/img/devvolt.png", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/img/devvolt.png");
});

app.get("/img/whentheimpostor", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/img/devvolt.png");
});

app.get("/img/whenthe.png", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/img/whenthe.png");
});

//Server Listener
app.listen("5500", () => {
  console.log(`Server started...`);
});


//porcodio