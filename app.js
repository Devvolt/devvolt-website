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

app.get("/portfolio/gugliee", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'gugliee', 'index.html'));
});

app.get("/portfolio/brasilianodev", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'brasilianodev', 'index.html'));
});

app.get("/portfolio/buffolollo", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'workinprogress', 'index.html'));
});

app.get("/portfolio/neonsn0w", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'workinprogress', 'index.html'));
});

app.get("/portfolio/gianmpr", (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'workinprogress', 'index.html'));
});

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});
app.get('/node_modules/owl.carousel/dist/assets/owl.carousel.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/node_modules/owl.carousel/dist/assets/owl.carousel.min.css'));
});

// JS

app.get("/js/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, 'js/main.js'));
});
app.get("/dvd/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, 'dvd/main.js'));
});

app.get('/node_modules/jquery/dist/jquery.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/node_modules/jquery/dist/jquery.js'));
});
app.get('/node_modules/owl.carousel/dist/owl.carousel.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/node_modules/owl.carousel/dist/owl.carousel.min.js'));
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
  res.sendFile(path.join(__dirname, 'img/whentheimpostor.png'));
});
app.get("/img/genericboieth.png", (req, res) => {
  res.sendFile(path.join(__dirname, '/img/genericboieth.png'));
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
