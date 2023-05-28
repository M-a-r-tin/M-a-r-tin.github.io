# Dies ist eine kleine Übung für einige Javascript Grundlagen - vor allem der Verarbeitung von Userinput und der Manipulation des DOM onClick!

     Falsche Eingaben werden erkannt
     Usereingaben per Textfeld oder +/- Button
     Zufallsgenerator
     Warnungen vor ev. technischer Auslastung
     Responsiv - passt sich Auflösungen < 600px an
     Lade-Anzeige bei großen Berechnungen

## ToDo

     Plus/Minus Schaltflächen werden erst nach dem ersten Erzeugen aktiv und nicht direkt nach einer Eingabe

     Das Ändern der Größe nach Erzeugen funktioniert onClick auf die +/- buttons
          > "erzeugen" (etwa nach Änderung der Zahlenwerte) setzt den Wert wieder auf den Ursprung (2) zurück, passt dies aber nicht in der Darstellung an
           (Beispiel: User hat Feld erzeugt > klickt bei Größe bis zur 5 > ändert Reihe und klickt "erzeugen" = PaddingWert wieder wie onload (2) innerHTML. = bleibt aber fälschlicherweise bei Usereingabe)

          > elegante Lösung wäre es onLoad das Padding vom innerHTML zu übernehmen
