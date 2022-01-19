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

app.get("/portfolio/genericboi", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'genericboi', 'index.html'));
});

/*
app.get("/dvd", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd/index.html'));
});
*/

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});
// JS

app.get("/js/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, 'js/main.js'));
});
app.get("/dvd/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd/main.js'));
});

//IMGs

app.get("/img/devvolt.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img/devvolt.png'));
});
app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img/whentheimpostor.png'));
});
app.get("/img/whenthe.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'img/whenthe.png'));
});
app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd/favicon.png'));
});

// SVG
/*
app.get("logos/dvdlogo-01.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd/logos/dvdlogo-01.svg'));
});
app.get("logos/dvdlogo-02.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-02.svg'));
});
app.get("logos/dvdlogo-03.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-03.svg'));
});
app.get("logos/dvdlogo-04.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-04.svg'));
});
app.get("logos/dvdlogo-05.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-05.svg'));
});
app.get("logos/dvdlogo-06.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-06.svg'));
});
app.get("logos/dvdlogo-07.png", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd', 'logos', 'dvdlogo-07.svg'));
});
*/
//TODO: dashboard

//Server Listener (HTTPS)
sslServer.listen(443, () => {
  console.log(`HTTPS server started 🚀...`);
});
