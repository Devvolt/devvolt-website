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
    key: fs.readFileSync(path.join(__dirname, "cert", "private.key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "domain.cert.pem")),
  },
  app
);

//URLs

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/portfolio/guglieee", (req, res) => {
  res.sendFile("C:/inetpub/wwwroot/devvolt/portfolio/guglieee.html");
});

app.get("/portfolio/genericboi", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'genericboi', 'index.html'));
});

//secret menu

app.get("/secret", (req, res) => {
  console.log(`WebReq detected from ${req.ip} to SecretMenu!!`);
  res.sendFile(path.join(__dirname, 'secret', 'index.html'));
});

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

// JS

app.get("/js/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'main.js'));
});

//IMGs

app.get("/img/devvolt.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img', 'devvolt.png'));
});

app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img', 'whentheimpostor.png'));
});

app.get("/img/whenthe.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img', 'whenthe.png'));
});

// Dashboard
app.get("/dashboard", (req, res) => {
  res.sendFile("C:/Users/Administrator/Desktop/buffolollo bot v2 (13)/dashboard/views/index.ejs");
  res.redirect('https://bot.devvolt.dev');
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
