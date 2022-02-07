<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="ir" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Devvolt | Home</title>
    <meta name="description" content="Devvolt" />
    <link rel="stylesheet" href="css/diocane.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./img/devvolt.png" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <link
        rel="stylesheet"
        href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
    />
    <meta property="og:site_name" content="Devvolt" />
    <meta property="og:url" content="https://devvolt.dev" />
    <meta property="og:title" content="Devvolt" />
    <meta
        property="og:description"
        content="Un gruppo di developer scansafatiche"
    />
    <meta property="og:type" content="website" />
    <meta
        name="og:image"
        itemprop="image"
        content="img/whentheimposterisgay.png"
    />
    <meta name="theme-color" content="#8A2BE2" />
</head>

<body>
<!-- NAVBAR -->
<nav class="navbar">
    <div class="scroll-up-drn">
        <i class="fas fa-angle-up"></i>
    </div>
    <div class="max-width">
        <div class="logo"><a href="#home">Devvolt</a></div>
        <ul class="menu">
            <li><a href="#home" class="menu-drn">HOME</a></li>
            <li><a href="#informazioni" class="menu-drn">INFO</a></li>
            <li><a href="#developers" class="menu-drn">STAFF</a></li>
            <?php
            if (isset($_SESSION["useruid"])) {
                echo "<li><a href='profile.php' class='menu-drn'>Profilo</a></li>";
                echo "<li><a href='includes/logout.inc.php' class='menu-drn'>LOG OUT</a></li>";
            } else {
                echo "<li><a href='register.php' class='menu-drn'>REGISTRATI</a></li>";
                echo "<li><a href='login.php' class='menu-drn'>LOG IN</a></li>";
            }
            ?>
        </ul>
        <div class="menu-drn">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</nav>