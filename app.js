//libs
const app = require("express")();
const https = require("https");
const path = require("path");
const fs = require("fs");
const hsts = require("hsts");

//SSL
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "private.key.pem")),
    cert: fs.readFileSync(
      path.join(__dirname, "..", "cert", "domain.cert.pem")
    ),
  },
  app
);

app.use(
  hsts({
    maxAge: 31536000, // Must be at least 1 year to be approved
    includeSubDomains: true, // Must be enabled to be approved
    preload: true,
  })
);

const hstsMiddleware = hsts({
  maxAge: 1234000
})
 
app.use((req, res, next) => {
  if (req.secure) {
    hstsMiddleware(req, res, next)
  } else {
    next()
  }
})

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

app.get("/portfolio/brasilianodev", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "brasilianodev", "index.html")
  );
});

app.get("/portfolio/buffolollo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
});

app.get("/portfolio/neonsn0w", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
});

app.get("/portfolio/gianmpr", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "gianmpr", "index.html"));
});

app.get("/portfolio/Red_Fox", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "redfox", "index.html"));
});

app.get("/portfolio/somty", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
});

app.get("/ts", (req, res) => {
  res.redirect("ts3server://borders.voicehosting.it");
});

app.get("/database", (req, res) => {
  res.redirect("https://fdo-manager.web.app/");
});

app.get("/sitoomega", (req, res) => {
  res.redirect("http://185.229.237.130");
});

app.get("/discord", (req, res) => {
  res.redirect("https://discord.gg/nC65WDFTUz");
});

app.get("/fivem", (req, res) => {
  res.redirect("https://cfx.re/join/656z74");
});

app.get("/portfolio/SonoLuca", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
});

app.get("/portfolio/Nikuez/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
});

app.get("/bordersrp/", (req, res) => {
  res.sendFile(path.join(__dirname, "bordersrp", "index.html"));
});

app.get("/projects/vollex-os", (req, res) => {
  res.sendFile(path.join(__dirname, "projects", "VollexOS", "index.html"));
});

//CSS

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "css", "style.css"));
});
app.get("/css/styleborders.css", (req, res) => {
  res.sendFile(path.join(__dirname, "css", "styleborders.css"));
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
app.get("/js/mainborders.js", (req, res) => {
  res.sendFile(path.join(__dirname, "js/mainborders.js"));
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
app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/whentheimpostor.png"));
});
app.get("/img/whenthe.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/whenthe.png"));
});
app.get("/img/whentheimpostor.png", (req, res) => {
  res.sendFile(path.join(__dirname, "img/whentheimpostor.png"));
});
app.get("/img/genericboieth.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/img/genericboieth.png"));
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



const port = 443;

//Server Listener (HTTPS)
sslServer.listen(port, () => {
  console.log(`HTTPS server started on ${port} 🚀...`);
});
