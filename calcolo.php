<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['personaggio_n'])) {
        $personaggio = $_POST['personaggio_n'];
        $tainted = $_POST['taint'];
        $giocatore = $_POST['userInput'];
        setcookie("personaggio", $personaggio, time()+60);
        setcookie("tainted", $tainted, time()+60);
        setcookie("giocatore", $giocatore, time()+60);
    } else {
        echo "Dati non ricevuti correttamente.";
    }
} else {
    echo "Request method non valido.";
}
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Coppa Isaac</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css" />
    </head>
    <body>
        <button class="top-left-button" onclick="tornaIndietro()" id="bottone-indietro">Indietro</button>
        <div class="menu-selezione" id="menu-selezione">
            <div class="sezione" id="sezione-1">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Boss">
                <button class="categoria-nome" onclick="apriBoss()">Boss</button>
                </div>
            </div>
            <div class="sezione" id="sezione-2">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Partita">
                <button class="categoria-nome" onclick="apriPartita()">Partita</button>
                </div>
            </div>
            <div class="sezione" id="sezione-3">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Oggetti">
                <button class="categoria-nome" onclick="apriOggetti()">Oggetti</button>
                </div>
            </div>
            <div class="sezione" id="sezione-4">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Tempo">
                <button class="categoria-nome" onclick="apriTempo()">Tempo</button>
                </div>
            </div>
            <div class="sezione" id="sezione-5">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Stanza">
                <button class="categoria-nome" onclick="apriStanza()">Stanza</button>
                </div>
            </div>
            <div class="sezione" id="sezione-6">
                <div class="image-wrapper">
                <img class="giocatore" src="/assets/sfondi/spazionome.png" alt="Morte">
                <button class="categoria-nome" onclick="apriMorte()">Morte</button>
                </div>
            </div>
        </div>
        <div class="menu-boss" id="menu-boss">
            <select id="select-boss" multiple>
            </select>
        </div>
        <div class="menu-items" id="menu-items">
            <select id="select-items" multiple>
            </select>
        </div>
        <div class="menu-partita" id="menu-partita">
            <select id="select-partita">
            </select>
        </div>
        <div class="menu-tempo" id="menu-tempo">
            <input type="text" class="html-duration-picker" data-hide-seconds="false" data-duration="00:00:00">
        </div>
            <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/html-duration-picker@latest/dist/html-duration-picker.min.js"></script>
            <script src="/scripts/punteggio.js"></script>
    </body>
</html>