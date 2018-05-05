# Introduction (Oli)
Edward Lorenz brachte im Jahre 1972, 3 Jahre nachdem er sein berühmtes Paper zum Lorenz-Modell publizierte, ein weiteresPaper mit dem Titel: Löst ein Flügelschlag eines Schmetterlings in Brasilien ein Tornado in Texas aus? " heraus. Aussergewöhnlicherweise stoss dieses Paper auf reges Interesse in der Bevölkerung. Dieser Effekt wird Butterfly Effect genannt und wird gerne für ein allgemeines Konzept für 'kleine Ereignisse, die grosse und weitverbreitete Konsequenzen haben' verwendet. Sogar in Filmen wie Mr.Nobody/The butterfly effect kommt der Butterfly Effect vor. Wir wollen uns nun konkret damit befassen und sehen, ob wirklich etwas dran ist.

# Attractor (Oli)
Menge von Werten, zu welcher sich ein System zu entwickeln tendiert. 
Strange attraktor: zum einen wiedererkennbares System (attraktor), aber innerhalb des Systems können sich zwei Punkte zum einen Zeitpunkt unmittelbar nebeneinander befinden und im anderen weit weg voneinander. Das heisst also, kleinste Parameteränderungen haben grosse Unterschiede zur vorherigen Lösungen zur Folge. 
strange attractors werden manchmal auch mit Fraktalen in Verbindung gebracht, denn auch diese haben wiederkehrende Muster, aber geringe Parameteränderungen lösen grosse Veränderung innerhalb des Systems aus. Berühmte Fraktale sind Mandelbrot Fraktale // Insert gif!

Um euch eine bessere Vorstellung zum Lorenz Modell zu geben, haben wir eine kleine Webapp erstellt, womit ihr mit den Parameter etwas rumspielen könnt und das Modell entsprechend neu zeichnen könnt. Am besten geht ihr mit eurem Laptop auf lorenz.olidias.ch, ihr könnt aber auch mit dem Handy den QR-Code scannen und das gesamte mobile durchspielen. 



# Analyse der Gleichungen (Oli)
Diese drei Gleichungen enthalten viele physikalische Eigenschaften wie die Dichte, Geschwindigkeit und Temperatur der Atmosphäre und stellen diese physikalischen Werte formalisiert dar. Lorenz wollte aus den bereits existierenden Gleichungen der Hydrodynamik nun ein Modell zur Wetterprognose erstellen. Basierend auf vorgehende Werke von Saltzman startete Lorenz mit den hyrodynamischen Gleichungen und verfolgte ein systematisches Näherungsvorgehen, womit er auf diese drei dargestellten Gleichungen stoss.
 Die X-Achse entspricht dabei der hydrodynamischen, räumlichen Durchschnittsgeschwindigkeit, also wie wir verstanden haben, durschnittliche Windgeschwindigkeit. 
Die Y-Achse repräsentiert die Temperatur und die Z-Achse der Temperaturgradient. Also wie schnell sich die Temperatur verändert. 

	* Parameter erläutern
		* sigma: Prandtl nr. = Viskosität / Wärmeleitungskoeffizient
		* rho: Rayleigh nr. = Wärmeausdehnung / Viskosität
		* beta: Wärmeausdehnung
		Auf Whiteboard/Tafel schreiben

Falls es euch interessiert, das gesamte Berechnen der Koordinaten geschieht in dieser Funktion (Calculate in App.js). Es ist eine Schlaufe, mit welcher wir numerische Lösungen für diese Differentialgleichungen finden. Der Startwert setzten wir dabei auf 0.1.

# Einwirkungen auf Zelle (Matt)
Die stärksten Einflüsse auf die Winde in der Zelle haben Dichte und Temparatur-Unterschiede. Dies kann sowohl zu Steigwinden als auch zu Landwinden (Horizontalwinde) führen. Die Gravitation spielt hier auch eine Rolle, denn sie lässt warme Luft aufsteigen und kalte absinken. Zu guter Letzt, wirkt die Koroliskraft indem sie Winde ablenkt entgegen des Equators.

# Chaostheorie (Matt)
## Szenario 1
Wenn wir das rho hier um 1 erhöhen bekommen wir ganz anderes Muster, das keine Gemeinsamkeiten mit dem letzten Systemwerte hat.
# Szenario 2
Als zweites Beispiel, man beachte, dass die die y-komponente des letzten Punktes vorher positiv war, danach negativ. Auch wenn rho danach auf 24.69 gesetzt wird(delta -0.01) verändert sich die Form um den letzten Punkt erheblich. Der letzte Punkt befindet sich ganz an einem anderen Ort -> chaotisches Verhalten (minimste Parameteränderungen führen zu grossen Änderungen der Werte)
Dennoch bleibt Grundform des Modells aber erhalten.
Mit diesen zwei Beispielen wollten wir euch die Chaostheorie näher bringen. Diese Theorie besagt, dass kleine Werteänderungen an den Anfangsparametern grosse Auswirkungen auf das Ergebnis haben. Ausserdem ist aus den Parametern nicht vorhersagbar wie die Form des Plottes aussehen wird, da die Form auf dem Plott sehr viele verschiedene Formen annehemen kann.


# Wie war das mit dem Schmetterling? (Oli)

* Wie wir eben gesehen haben, sind grosse Sprünge und chaotisches Verhalten in diesem Modell enthalten. Ist an dieser Aussage bezüglich dem Schmetterling also trotzdem etwas dran?
Bezogen auf das Lorenzmodell ist diese Theorie möglich. Es ist aber gemäss dem Modell nicht möglich definitiv zu sagen, was ein Tornado ausgelöst hat. Gerade durch das chaotische Verhalten ist es unmöglich auf solch kleine Events zurückzurechnen, selbst wenn man alle benötigten Daten hätte.
Im Bezug auf die Realität ist diese romantische Geschichte allerdings nicht möglich. Der Grund ist, dass ein Flügelschlag eines Schmetterlings in einem solch grossen System wie das Wetter so insignifikant ist, dass es keine Auswirkungen haben kann. 
Im Modell wurden wichtige Faktoren wie die Luftfeuchtigkeit oder andere Gegebenheiten wie die Wolken oder die Albedo nicht modelliert, deshalb kann es nicht für die Prognose des Wetters benutzt werden. Die wichtigste Aussage des Modells ist aber, dass das Wetter ein chaotisches Verhalten hat, und deshalb Prognosen nur auf limitierte Zeitdauer gemacht werden können. 
 


# Ausblick (Matt)
Zwar ist dieses System kein komplettes Klimamodell. Auch fehlen dem Modell viele Faktoren und äussere Einflüsse auf die Klimazelle.
Nichts desto trotz, ist dieses Model das Erste Modell das chaotisches Verhalten nachbilden konnte mit einfachen und verständlichen Parametern arbeitet um ein Wettermodell im Einfachen zu veranschaulichen, ohne Nebengeräusche wie Wolken, Strahlung, Vegeation und Städte.
Dieses Modell wird noch heute gebraucht, auch wenn nicht für die Klimatologie, zum Beispiel in der Elektronikindustrie.
