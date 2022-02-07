<?php
include_once 'header.php'
?>

<section class="login">
    <h2>Log In</h2>
    <div class="registerform">
    <form class="forma" action="/includes/login.inc.php" method="post">
    <input type="text" name="uid" placeholder="Username/Email...">
    <input type="password" name="pwd" placeholder="Password...">
    <button type="submit" name="submit">Login</button>
    </form>
</div>
<?php
    if (isset($_GET["error"])) {
        if ($_GET["error"] == "emptyinput") {
            echo "<p>Hai dimenticato qualche punto</p>";
        }
        else if ($_GET["error"] == "wronglogin") {
            echo "<p>Informazioni di login Errate</p>";
        }

    }
?>
</section>

<?php
include_once 'footer.php'
?>