//libs
const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const hsts = require("hsts");
const axios = require("axios"); // Import Axios
const { URLSearchParams } = require("url");
const bodyParser = require("body-parser"); // Import body-parser
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args)); // Import node-fetch asynchronously; see https://www.npmjs.com/package/node-fetch#installation for more info on why this is done.
const { Client, WebhookClient } = require("discord.js");
const client = new Client({ intents: 32767, partials: ["CHANNEL"] });
const {Token} = require('./config.json');

const Token = "OTU1NDczMTg5NjgzNzQ0NzY5.YjiLwA.cc5hsgBHeAyrjLgaY39yDYX9Pv4";

client.on("ready", () => {
  console.log("Pronto");
});

client.login(Token);

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

// WHITELIST BORDERS

/* Client Variables */
const client_id = "955473189683744769"; // Paste your bot's ID here
const client_secret = "bv8fgqqogY4DEtskjtUpBXkmsLbASjgw"; // Paste your bot's secret here

/* Make a function to give us configuration for the Discord API */
function make_config(authorization_token) {
  // Define the function
  data = {
    // Define "data"
    headers: {
      // Define "headers" of "data"
      authorization: `Bearer ${authorization_token}`, // Define the authorization
    },
  };
  return data; // Return the created object
}

/* Configure the app */
app.use(express.urlencoded({ extended: false })); // configure the app to parse requests with urlencoded payloads
app.use(express.json()); // configure the app to parse requests with JSON payloads
app.use(bodyParser.text()); // configure the app to be able to read text

/* Handle GET Requests */
app.get("/whitelist", (req, res) => {
  // Handle incoming GET requests to http://localhost:(port)/
  res.sendFile(path.join(__dirname, "whitelist", "index.html")); // Send the index.html file
});
app.get("/verificati", (req, res) => {
  // Handle incoming GET requests to http://localhost:(port)/
  res.sendFile(path.join(__dirname, "whitelist", "login.html")); // Send the index.html file
});

/* Handle POST Requests */
app.post("/whitelist/user", (req, res) => {
  // Will run when there are any incoming POST requests to http://localhost:(port)/user. Note that a POST request is different from a GET request, so this won't exactly work when you actually visit http://localhost:(port)/user
  /* Create our Form Data */
  const data_1 = new URLSearchParams(); // Create a new formData object with the constructor
  const domande = {
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "RDM",
            title: "Cosa indica il termine RDM?",
            choices: [
              "Random Death Match",
              "Random Dump MilanoRP",
              "Read Death Math",
              "Random Date Match",
            ],
            correctAnswer: "Radmon Death Match",
          },
        ],
      },
      {
        elements: [
          {
            type: "radiogroup",
            name: "Guglie",
            title: "Dimmi una cosa, Guglie è un pirla?",
            choicesOrder: "random",
            choices: ["Si", "No", "Boh", "E' un metagamer non un pirla"],
            correctAnswer: "E' un metagamer non un pirla",
          },
        ],
      },
    ],
  };
  data_1.append("client_id", client_id); // Append the client_id variable to the data
  data_1.append("client_secret", client_secret); // Append the client_secret variable to the data
  data_1.append("grant_type", "authorization_code"); // This field will tell the Discord API what you are wanting in your initial request.
  data_1.append("redirect_uri", `https://devvolt.dev/whitelist`); // This is the redirect URL where the user will be redirected when they finish the Discord login
  data_1.append("scope", "identify"); // This tells the Discord API what info you would like to retrieve. You can change this to include guilds, connections, email, etc.
  data_1.append("code", req.body); // This is a key parameter in our upcoming request. It is the code the user got from logging in. This will help us retrieve a token which we can use to get the user's info.
  

  fetch("https://discord.com/api/v8/oauth2/token", {
    method: "POST",
    body: data_1,
  })
    .then((response) => response.json())
    .then((data) => {
      // Make a request to the Discord API with the form data, convert the response to JSON, then take it and run the following code.
      axios
        .get(
          "https://discordapp.com/api/v8/users/@me",
          make_config(data.access_token)
        )
        .then((response) => {
          // Make a request yet again to the Discord API with the token from previously.
          const coso = {'domande': domande, 'user': response.data}
          res.status(200).send(coso); // Send the username with a status code 200.
          // console.log(response.data.id)
        })
        .catch((err) => {
          // Handle any errors in the request (such as 401 errors).
          console.log(err); // Log the error in the console
          res.sendStatus(500); // Send a 500 error.
        });
    });
});

app.post("/whitelist/ok", (req, res) => {
  // Will run when there are any incoming POST requests to http://localhost:(port)/user. Note that a POST request is different from a GET request, so this won't exactly work when you actually visit http://localhost:(port)/user
  /* Create our Form Data */
  console.log("Test ok");
  console.log(req.body);
  new WebhookClient({
    url: "https://discord.com/api/webhooks/985668052295233586/XZbWVtwYBYLcfZBx3ueLCFIZsI_3KOc7tPmTkMzm-eKCtUSa4_dmgyV0cMlyNsvy7Zdw",
  }).send({ content: req.body });
  // client.guilds.cache.get("914655607028613190").members.cache.get(req.body).roles.add("979995762538721331")
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

app.get("/portfolio/Mawku", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "mawku", "index.html"));
});

app.get("/portfolio/elauqzz", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "elauqzz", "index.html"));
});

app.get("/portfolio/Somty", (req, res) => {
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
  res.redirect("fivem://connect/cfx.re/join/re633x");
});

app.get("/paypal", (req, res) => {
  res.redirect("https://paypal.me/guglie06");
});
app.get("/tuamadre", (req, res) => {
  res.redirect("https://youtu.be/dQw4w9WgXcQ");
});

app.get("/portfolio/Nikuez/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "portfolio", "workinprogress", "index.html")
  );
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
app.get("/js/whitelist.js", (req, res) => {
  res.sendFile(path.join(__dirname, "js/whitelist.js"));
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

// 404 PAGE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "errors", "404.html"));
});

const port = 443;

//Server Listener (HTTPS)
sslServer.listen(port, () => {
  console.log(`HTTPS server started on ${port} 🚀...`);
});
