//libs
const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

//env var
const app = express();

//SSL
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", 'public.key.pem')),
    cert: fs.readFileSync(path.join(__dirname, "cert", 'private.key.pem')),
  },
  app
);

//URLs

app.get("/", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/index.html");
});

app.get("/portfolio/guglieee", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/portfolio/guglieee.html");
});

app.get("/portfolio/genericboi", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/portfolio/genericboi.html");
});

//secret menu

app.get("/secret", (req, res) => {
  console.log(`WebReq detected from ${req.ip} to SecretMenu!!`);
  res.sendFile("C:/inetpub/wwwroot/devvolt/secret/index.html");
});

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/css/style.css");
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

//Server Listener (HTTPS)
sslServer.listen(443, () => {
  console.log(`HTTPS server started 🚀...`);
});

/*
Server Listener (HTTP)
app.listen("5500", () => {
  console.log(`HTTP Server started...`);
});
*/