<?php
    include_once  'header.php'
?>
    <!-- HOME -->
    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <?php
          echo "<h1>Benvenuto" . $_SESSION["useruid"] . "!</h1>"
          ?>
          <div class="text-1">Benvenuto nel sito ufficiale dei</div>
          <div class="text-2">DEVVOLT</div>
          <div class="text-3">Developers <span class="typing"></span></div>
          <a href="#informazioni">Scopri di più</a>
        </div>
      </div>
    </section>
    <!--INFORMAZIONI -->
    <section class="informazioni" id="informazioni">
      <div class="max-width">
        <h2 class="titolo">INFORMAZIONI</h2>
        <div class="informazioni-content">
          <div class="column left">
            <img src="img/whenthe.png" alt="" />
          </div>
          <div class="column right">
            <div class="text">
              ECCO COME È NATO <span class="typing-2"></span>
            </div>
            <p>
              Siamo dei ragazzi che non hanno mai niente da fare e nel tempo
              libero programmano :D
            </p>
            <a href="https://dsc.gg/uccellini" target="_blank">Entra nel discord!</a>
          <a href="https://github.com/devvolt" target="_blank">Esplora</a>
          </div>

          
        </div>
      </div>
    </section>
    <!--STAFF -->
    <section class="staff" id="developers">
      <div class="max-width">
        <h2 class="titolo">Chi Siamo?</h2>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <a href="./portfolio/gugliee/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/73486489?v=4"
                  alt=""
                />
                <div class="text">Guglieeee</div>
                <p>Leader</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/neonsn0w/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/85235959?v=4"
                  alt=""
                />
                <div class="text">neonsn0w</div>
                <p>Leader</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/buffolollo/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/84961980?v=4"
                  alt=""
                />
                <div class="text">Buffolollo</div>
                <p>Leader, Dev Discord Bot</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/gianmpr/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/59767718?v=4"
                  alt=""
                />
                <div class="text">gianmapr</div>
                <p>Developer</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/genericboi/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/73657834?v=4"
                  alt=""
                />
                <div class="text">GenericBoi</div>
                <p>Backend Dev</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/brasilianodev/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/92883575?v=4"
                  alt=""
                />
                <div class="text">BrasilianoDev</div>
                <p>Developer</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/SonoLuca/" class="link">
                <img
                  src="https://avatars.githubusercontent.com/u/98851084?v=4"
                  alt=""
                />
                <div class="text">SonoLuca</div>
                <p>Developer</p>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <a href="./portfolio/Red_Fox/" class="link">
                <img
                  src="https://cdn.discordapp.com/avatars/743826625489272926/1c2d42470687c8579f12af267b196e95.png?size=1024"
                  alt=""
                />
                <div class="text">Red_Fox</div>
                <p>Designer and Sponsor</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <?php
    include_once 'footer.php'
    ?>