let previousNumber = null; // wird benötigt, damit nicht das selbe Bild nacheinander geladen wird

function action() {
  // modal, btn und close als var speichern
  var modal = document.getElementById("idDivResult");
  var close = document.getElementById("idCloseModal");
  var word = document.getElementById("idInputWord");

  // modal öffnen
  modal.style.display = "flex";

  /*
  ***
  - string "behandeln"    
  - Variabeln anlegen
  - Fakultäten ermitteln
  - Formel für Ergebnis
  - Ergebnis lesbar machen
  - Wahrscheinlichkeitsbarometer
  ***
  */

  /////////////////////////////
  // Alle Buchstaben und Alphabet-Sätze ermitteln
  var word = document.getElementById("idInputWord").value;
  word = word.toLowerCase(); // String in Kleinbuchstaben
  let nWord = word.length; // Buchstaben zählen

  // Für die Anzahl der benötigten Alphabetsätze muss der Buchstabe mit den meisten Wiederholungen und die Anzahl ermittelt werden

  var count = {}; // Leeres Objekt anlegen für die nAlphabet

  // Iteriert über jeden Buchstaben im String
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (/[a-z]/.test(letter)) {
      // /[a-z]/ - nimmt nur Kleinbuchstaben von a-z, ignoriert alles andere
      if (count[letter] === undefined) {
        // undefinde bedeuted, 'noch nicht vorhanden', wird also zu 1
        count[letter] = 1;
      } else {
        count[letter]++;
      }
    }
  }
  // im Objekt 'count' liegen jetzt {buchstabe: n} Paare

  var nAlphabet = 0;
  // Iteriere über jedes Buchstaben-Zählpaar im count-Objekt
  for (var letter in count) {
    // vergleicht alle counts und holt den höchsten
    if (count.hasOwnProperty(letter)) {
      if (count[letter] > nAlphabet) {
        nAlphabet = count[letter];
      }
    }
  }

  /////////////
  // Rechnen /////////
  // Variablen Anlegen
  let nBuchstabenImAlphabet = 26; //Buchstaben pro Alphabet
  let n = nWord; // Anzahl Buchstaben/Wort
  let k = nAlphabet * nBuchstabenImAlphabet; //Anzahl Alphabete
  let z = k - n; // Zwischenrechnung

  //Berechnet n! / k! / z! und als Variablen zurück
  function fakultaetN(fak) {
    for (i = 1, fn = 1; i <= fak; fn = fn * i++) {}
    return fn;
  }

  function fakultaetK(fak) {
    for (i = 1, fk = 1; i <= fak; fk = fk * i++) {}
    return fk;
  }

  function fakultaetZ(fak) {
    for (i = 1, fz = 1; i <= fak; fz = fz * i++) {}
    return fz;
  }

  var fn = fakultaetN(n);
  var fk = fakultaetK(k);
  var fz = fakultaetZ(z);

  // Zwischenschritte für die Kontrolle
  // console.log("Fakultäten:");
  // console.log("(n!) " + n + "! => " + fn);
  // console.log("(k!) " + k + "! => " + fk);
  // console.log("(z!) " + z + "! => " + fz);
  // console.log("####################################");

  ////////////////////////////
  // Hier steckt die Formel //
  let resultProzent = fz / fk;
  let result = 1 / resultProzent;

  ///////////////////////////////////
  // Ergebnis besser lesbar machen //

  // Wandelt die langen Prozentangaben um / Es wird die Zahl so ausgegeben, dass alle Nullen stehen bleiben aber nur die ersten beiden Zahlen ( die nicht Null sind) gezeigt werden.
  let digits = Math.floor(-1 * Math.log10(resultProzent)) + 2; // ermittelt die benötigten Anzahl an Dezimalstellen /
  resultProzent = parseFloat(resultProzent).toFixed(digits);

  //aufsplitten und Punkte einfügen / zu String zurück
  resultAsString = result.toLocaleString("de-DE").split("");
  resultAsString = resultAsString.join("");

  // in HTML einfügen
  document.getElementById("idResultSatz").innerHTML =
    ' Die Chance das Wort "' +
    word +
    ' " in der entsprechenden Reihenfolge  aus einem Vorrat aus ' +
    nAlphabet +
    " Sätzen Buchstabensuppe zu löffeln liegt bei: " +
    "1 zu " +
    resultAsString +
    "!";
  // document.getElementById("idResult").innerHTML = "1 zu " + resultAsString;
  document.getElementById("idResultProzent").innerHTML =
    "Das sind " + resultProzent + "%.";

  document.getElementById("idAction").value = "Nochmal";
  //////////////////////////////////
  // Wahrscheinlichkeitsbarometer //
  //////////////////////////////////

  //
  // Beispiele für Wahrscheinlichkeiten
  //
  // 2 von 1 = 650
  // 2 von 2 = 2.652
  // 2 von 3 = 6.006
  // 2 von 4 = 10.712
  // 2 von 5 = 16.772
  // 2 von 6 = 24.180

  // 3 von 1 = 15.600
  // 3 von 2 = 132.600

  let pMenschlicherBlitzableiter = 16000000000000000000000000; // 16.000.000.000.000.000.000.000.000
  let pMenschlicherBlitzableiterAntwort =
    "Bravo! Die Wahrscheinlichkeit, die Buchstaben dieses Wortes zufällig auf dem Löffel zu haben, ist geringer als die Wahrscheinlichkeit, dass Roy Suvillian zum achten Mal vom Blitz getroffen wird (16 Quadrillionen).";
  let pMeteorit = 182138880000; //182.138.880.000 //Meteorit, der in den  eigenen Garten fällt
  let pMeteoritAntwort =
    "Die Chance, dass ein Meteorit genau deinen Garten trifft, ist höher!";
  let pLotto = 140000000; //140.000.000; // "Mit Superzahl"
  let pLottoAntwort =
    "Ein Lottogewinn mit Superzahl ist wahrscheinlicher, als das Wort, das du dir ausgesucht hast zufällig aus der Buchstabensuppe zu fischen.";
  let pBlitz = 10000000000; // 10.000.000.000;
  let pBlitzAntwort =
    "Die Wahrscheinlichkeit, vom Blitz getroffen zu werden, ist größer!";
  let pFuenflinge = 50000000; // 50.000.000
  let pFuenflingeAntwort =
    "Wenn du schwanger wirst, ist die Wahrscheinlichkeit, dass du Fünflinge bekommst, größer als die, dass du zufällig dieses Wort aus der Suppe fischst.";
  let pHundebiss = 40000000; // 40.000.000;
  let pHundebissAntwort =
    "Es ist wahrscheinlicher, an einem Hundebiss zu sterben, als zufällig dieses Wort aus der Suppe zu löffeln.";
  let pPapst = 20000000; //20.000.000
  let pPapstAntwort =
    "Es ist wahrscheinlicher, vom Papst heiliggesprochen zu werden, als zufällig dieses Wort auf dem Löffel zu haben";
  let pFlugzeugabsturz = 16000000; // 16.000.000;
  let pFlugzeugabsturzAntwort =
    "Dass dein Wort zufällig auf dem Löffel landet, ist noch unwahrscheinlicher, als dass du mit einem Flugzeug abstürzt!";
  let pPräsident = 10000000; //10.000.000;
  let pPräsidentAntwort =
    "Das entspricht in etwa der Wahrscheinlichkeit, amerikanischer Präsident zu werden. Make Zufall Great Again.";
  let pLinkshänder = 4400000; //4.400.000;
  let pLinkshaenderAntwort =
    "Es ist wahrscheinlicher, dass ein Linkshänder stirbt, während er einen Gegenstand benutzt, der für Rechtshänder bestimmt ist, als dass dieses Wort zufällig auf deinem Löffel landet!";
  let pHaiangriff = 3700000; // 3.700.000
  let pHaiangriffAntwort =
    "Statistisch gesehen ist es wahrscheinlicher, von einem Hai angegriffen zu werden, als zufällig dieses Wort zu löffeln. Wenn du eine Robbe bist, ist diese Information hinfällig";
  let pMorgensUndAbends = 1000000; // 1.000.000;
  let pMorgensUndAbendsAntwort =
    "Es ist wahrscheinlicher dass du morgens aufstehst und abends tot bist.";
  let pVierlinge = 600000; // 600.000;
  let pVierlingeAntwort =
    "Es ist wahrscheinlicher, dass du im Fall einer Schwangerschaft Vierlinge bekommst.";
  let pGetraenkeautomat = 112000; // 112.000
  let pGetraenkeautomatAntwort =
    "Das ist unwahrscheinlicher, als von einem umfallenden Getränkeautomaten erschlagen zu werden.";
  let pSupermodelheiraten = 88000; //88.000;
  let pSupermodelheiratenAntwort =
    "Es ist wahrscheinlicher, dass du (als Mann) in deinem Leben ein Supermodel heiratest, als dieses Wort auf dem Löffel zu haben!";
  let pRoyalFlush = 30000; // 30.000
  let pRoyalFlushAntwort =
    "Das ist weniger wahrscheinlich als ein Royal Flush beim Poker";
  let pRaubmordInD = 150000; //15.000;
  let pRaubmordinDAntwort =
    "Es ist wahrscheinlicher, in Deutschland bei einem Raub ermordet zu werden.";
  let pAusterMitPerle = 12000; //12.000;
  let pAusterMitPerleAntwort =
    "Es ist wahrscheinlicher, eine Auster mit einer Perle darin zu finden.";
  let pDrillinge = 7000; // 7000
  let pDrillingeAntwort =
    "Es ist wahrscheinlicher, dass du im Falle einer Schwangerschaft Drillinge bekommst";
  let pSchlaganfall = 1600; // 1600
  let pSchlaganfallAntwort =
    "Die Wahrscheinlichkeit, einen Schlaganfall zu erleiden, ist höher!";
  let pGliedmassen = 500; // 500
  let pGliedmassenAntwort =
    "Die Wahrscheinlichkeit, mit einer sechsten Zehe oder einem sechsten Finger geboren zu werden, ist höher!";
  let pEinBuchstabeAntwort = "Ja das war wohl nur zum testen oder?";

  let progress = 0;

  if (result <= pGliedmassen) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pEinBuchstabeAntwort;
    progress = 0;
  } else if (result > pGliedmassen && result <= pSchlaganfall) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pGliedmassenAntwort;
    progress = 5;
  } else if (result > pSchlaganfall && result <= pAusterMitPerle) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pSchlaganfallAntwort;
    progress = 10;
  } else if (result > pAusterMitPerle && result <= pDrillinge) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pAusterMitPerleAntwort;
    progress = 15;
  } else if (result > pDrillinge && result <= pRaubmordInD) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pDrillingeAntwort;
    progress = 20;
  } else if (result > pRaubmordInD && result <= pRoyalFlush) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pRaubmordinDAntwort;
    progress = 25;
  } else if (result > pRoyalFlush && result <= pSupermodelheiraten) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pRoyalFlushAntwort;
    progress = 30;
  } else if (result > pSupermodelheiraten && result <= pGetraenkeautomat) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pSupermodelheiratenAntwort;
    progress = 35;
  } else if (result > pGetraenkeautomat && result <= pVierlinge) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pGetraenkeautomatAntwort;
    progress = 40;
  } else if (result > pVierlinge && result <= pMorgensUndAbends) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pVierlingeAntwort;
    progress = 45;
  } else if (result > pMorgensUndAbends && result <= pHaiangriff) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pMorgensUndAbendsAntwort;
    progress = 50;
  } else if (result > pHaiangriff && result <= pLinkshänder) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pHaiangriffAntwort;
    progress = 55;
  } else if (result > pLinkshänder && result <= pPräsident) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pLinkshaenderAntwort;
    progress = 60;
  } else if (result > pPräsident && result <= pFlugzeugabsturz) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pPräsidentAntwort;
    progress = 65;
  } else if (result > pFlugzeugabsturz && result <= pPapst) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pFlugzeugabsturzAntwort;
    progress = 60;
  } else if (result > pPapst && result <= pHundebiss) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pPapstAntwort;
    progress = 75;
  } else if (result > pHundebiss && result <= pFuenflinge) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pHundebissAntwort;
    progress = 80;
  } else if (result > pFuenflinge && result <= pBlitz) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pFuenflingeAntwort;
    progress = 85;
  } else if (result > pBlitz && result <= pLotto) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pBlitzAntwort;
    progress = 90;
  } else if (result > pLotto && result <= pMeteorit) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pLottoAntwort;
    progress = 95;
  } else if (result > pMeteorit && result <= pMenschlicherBlitzableiter) {
    document.getElementById("idUnnuetzesWissen").innerHTML = pMeteoritAntwort;
    progress = 97;
  } else if (result > pMenschlicherBlitzableiter) {
    document.getElementById("idUnnuetzesWissen").innerHTML =
      pMenschlicherBlitzableiterAntwort;
    progress = 100;
  }

  // Skala und Progressbar und Result werden erst bei Ausführung der Funktion angezeigt
  let skala = document.getElementById("idDivResult");
  skala.style.display = "flex";
  skala = document.getElementById("idScaleContainer");
  skala.style.display = "flex";
  skala = document.getElementById("idScaleContainer2");
  skala.style.display = "flex";
  skala = document.getElementById("idProgressbar");
  skala.style.display = "flex";

  ///////////////////////////////
  // Img nach Zufall auswählen //
  var imgSimpsons = document.getElementById("idHomer"); // Bild Markup ansteuern
  var imgNumber = Math.floor(Math.random() * 5) + 1; // Zufallsnummer zw 1 u 5 erzeugen
  // Dopplung vermeiden
  if (imgNumber == previousNumber) {
    imgNumber += 1;
    if (imgNumber == 6) {
      imgNumber -= 2;
    }
  }
  imgSimpsons.setAttribute("src", "/img/" + imgNumber + ".png");

  // imgNumber aktualisiert
  previousNumber = imgNumber;

  //////////////////
  // Progress Bar //
  //////////////////

  var i = 0;
  if (i == 0) {
    i = 1;
    var elemProgress = document.getElementById("idProgressbar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      // if (width >= 100) {
      if (width >= progress) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elemProgress.style.width = width + "%";
      }
    }
  }

  //
  // Modal schließen mit X
  close.onclick = function () {
    modal.style.display = "none";
  };

  // mit klick irgendwohin
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // ende action
}
