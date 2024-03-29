//libs
const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const hsts = require("hsts");
const app = express();

//SSL
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "privkey.pem")),
    cert: fs.readFileSync(
      path.join(__dirname, "..", "cert", "cert.pem")
    ),
  },
  app
);

app.use(
  hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  })
);

const hstsMiddleware = hsts({
  maxAge: 1234000,
});

app.use((req, res, next) => {
  if (req.secure) {
    hstsMiddleware(req, res, next);
  } else {
    next();
  }
});

//URLs

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/portfolio/genericboi", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "genericboi", "index.html"));
});

app.get("/portfolio/gugliee", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "gugliee", "index.html"));
});

app.get("/portfolio/buffolollo", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "workinprogress", "index.html"));
});

app.get("/portfolio/neonsn0w", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "neonsn0w", "index.html"));
});


app.get("/sitoomega", (req, res) => {
  res.redirect("http://185.229.237.130");
});
app.get("/discord", (req, res) => {
  res.redirect("https://discord.gg/UuuxbPzMsC");
});

app.get("/projects/dsc-music", (req, res) => {
  res.sendFile(path.join(__dirname, "projects", "dsc-music", "index.html"));
});

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "css", "style.css"));
});

app.get(
  "/node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
      )
    );
  }
);

// JS

app.get("/js/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "js/main.js"));
});

app.get("/node_modules/jquery/dist/jquery.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/node_modules/jquery/dist/jquery.js"));
});
app.get("/node_modules/owl.carousel/dist/owl.carousel.min.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/node_modules/owl.carousel/dist/owl.carousel.min.js")
  );
});

//IMGs

app.get("/img/devvolt.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/2.png"));
});
app.get("/img/unknown.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/unknown.png"));
});
app.get("/img/borders.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/borders.png"));
});
app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/whentheimpostor.png"));
});
app.get("/img/devvoltwallpaper.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/devvoltwallpaper.png"));
});
app.get("/img/whentheimposterisgay.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/whentheimposterisgay.png"));
});
app.get("/img/genericboieth.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/img/genericboieth.png"));
});
app.get("/img/wallpapertelefonodevvolt.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/img/wallpapertelefonodevvolt.png"));
});
app.get("/img/neonsn0w.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/img/neonsn0w.png"));
});
app.get("/img/neonsn0wpfp.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img/neonsn0wpfp.jpg"));
});

// 404 PAGE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "errors", "404.html"));
});

const port = 443;

//Server Listener (HTTPS)
sslServer.listen(port, () => {
  console.log(`HTTPS server started on ${port} 🚀...`);
});
