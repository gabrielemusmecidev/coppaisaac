
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Coppa Isaac</title>
    </head>

    <body>
        <div class="div_menu">
            <img class="menu" src="/assets/menu.png">
            <div class="div_personaggio">
                <img id="img_personaggio" class="personaggio" src="/assets/personaggi/isaac.png">
            </div>
            <div class="div_frecce">
            <img id="sinistra" class="sinistra" src="/assets/personaggi/sinistra.png">
            <div class="div_nome">
            <img id="img_nome" class="nome" src="/assets/personaggi/nisaac.png">
            <div class="check">
                TAINTED
                <input id="button_tainted" class="checkbox" type="checkbox">
            </div>
            </div>
            <img id="destra" class="destra" src="/assets/personaggi/destra.png">
            </div>
            <div class="div_form">
                <img class="giocatore" src="/assets/sfondi/spazionome.png">
                <form id="form" class="form" method="POST" action="calcolo.php">
                    <label class="label" for="userInput">Nome giocatore:</label><br>
                    <input class="inserisci" type="text" id="userInput" name="userInput" required><br>
                    <input id="invio" class="invio" type="submit" value="INVIO">
                    <input type="hidden" name="taint" id="taint">
                    <input type="hidden" name="personaggio_n" id="personaggio_n">
                </form>
            </div>
        </div>
        <script src="/scripts/script.js"></script>
    </body>
</html>
