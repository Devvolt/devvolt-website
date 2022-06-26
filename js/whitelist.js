code = undefined;
discordUser = undefined;
$(function () {
  if (location.href.indexOf("code") !== -1) {
    // Detect if you logged in or not
    code = location.href.substring(
      location.href.indexOf("code") + 5,
      location.href.length
    );
    const req = new XMLHttpRequest();
    req.open("POST", "https://devvolt.dev/whitelist/user");
    req.send(code);
    req.onload = () => {
      if (req.status === 500) {
        $("#errore-status").text(
          "Errore nell'autenticazione. Ricarica la pagina [" + req.status + "]"
        );
        let i = 5;
        setInterval(() => {
          $("#errore").text(
            "Verrai renderizzato alla pagina principale in " + i + " secondi"
          );
          i = i - 1;
        }, 1000);

        setTimeout(() => {
          window.location.href = "https://devvolt.dev/whitelist";
        }, 5000);
      } else if (req.status === 200) {
          response = JSON.parse(req.responseText);
        discordUser = response.user;
        domande = response.domande;
        console.log(discordUser);
        $("#quiz-section").show();
        $("#welcome_txt").text("Benvenuto " + discordUser.username);
        startTest(domande);
      } else {
        $("#errore").text("Errore imprevisto [" + req.status + "]");
      }
    };
  } else {
    $("#welcome-section").show();
  }
});

function startTest(domande) {
  Survey.StylesManager.applyTheme("modern");
  const survey = new Survey.Model(domande);
  $("#surveyContainer").Survey({ model: survey });
  survey.onComplete.add(alertResults);
}

// check results
function alertResults(sender) {
  const results = JSON.stringify(sender.data);
  validateAnswer(sender);
  findRisposteEsatte();
  alert(results);
}

function validateAnswer(sender) {
  const risposte = JSON.stringify(sender.data);
  const req = new XMLHttpRequest();
  req.open("POST", "https://devvolt.dev/whitelist/ok");
  req.send(risposte);
}
// function findRisposteEsatte() {
//   const risposteCorrette = [];
//   domande.pages.forEach((k) => {
//     risposteCorrette.push(k.elements[0].correctAnswer);
//   });
//   return risposteCorrette;
// }

function giveWl() {
  const req = new XMLHttpRequest();
  req.open("POST", "https://devvolt.dev/whitelist/ok");
  req.send(discordUser.id);
  req.onload = () => {
    if (req.status === 500) {
      $("#errore-status").text(
        "Errore nell'autenticazione. Ricarica la pagina [" + req.status + "]"
      );
      let i = 5;
      setInterval(() => {
        $("#errore").text(
          "Verrai renderizzato alla pagina principale in " + i + " secondi"
        );
        i = i - 1;
      }, 1000);

      setTimeout(() => {
        window.location.href = "https://devvolt.dev/whitelist";
      }, 5000);
    } else if (req.status === 200) {
      console.log("ok");
    } else {
      // Other
      $("#errore").text("Errore imprevisto [" + req.status + "]");
    }
  };
}
