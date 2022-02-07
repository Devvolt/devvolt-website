<?php
include_once 'header.php'
?>

<section class="registrati">
    <h2>Registrati</h2>
    <div class="registerform">
    <form class="forma" action="./includes/register.inc.php" method="post">
    <input type="text" name="name" placeholder="Nome...">
    <input type="text" name="email" placeholder="Email...">
    <input type="text" name="uid" placeholder="Username...">
    <input type="password" name="pwd" placeholder="Password...">
    <input type="password" name="pwdrepeat" placeholder="Conferma Password...">
    <button type="submit" name="submit">Registrati</button>
    </form>
</div>
<?php
    if (isset($_GET["error"])) {
        if ($_GET["error"] == "emptyinput") {
            echo "<p>Hai dimenticato qualche punto</p>";
        }
        else if ($_GET["error"] == "invaliduid") {
            echo "<p>Utilizza un Username Valido</p>";
        }
        else if ($_GET["error"] == "invalidemail") {
            echo "<p>Utilizza un'Email Valida</p>";
        }
        else if ($_GET["error"] == "passwordsdontmatch") {
            echo "<p>Le password non corrispondono</p>";
        }
        else if ($_GET["error"] == "stmtfailed") {
            echo "<p>Qualcosa è andato storto</p>";
        }
        else if ($_GET["error"] == "usernametaken") {
            echo "<p>Username Gia Utilizzato!</p>";
        }
        else if ($_GET["error"] == "none") {
            echo "<p>Registrazione avvenuta con successo</p>";
        }

    }
?>
</section>


<?php
include_once 'footer.php'
?>