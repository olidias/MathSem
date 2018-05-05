# Ablauf

 ## Vorstellung Lorenz Attraktor (oli)
	* "Butterfly" Effekt?
	* Modell für Zirkulation der Atmosphäre auf der Erde
	* Als bestes eine Karrikatur, Näherung
	* Zeigt, dass das Wetter chaotisches Verhalten hat
 	* (Strange) Attraktor erklären
		* Attraktor: Set von Werten, zu welchen sich ein System entwickelt mit einer grossen	  Menge an Startkonditionen
		* Strange attractor, wenn fraktale Struktur vorhanden ist (wiederkehrende ähnliche	  oder gleiche Strukturen)
	* Zeigen der Webapp (QR-Code oder lorenz.olidias.ch), kurze Instruktion und undetaillierte Ansicht des Sourcecodes

 ## Analyse der Gleichungen (oli/matthias)
	* Zeigen der Gleichungen
	* Parameter erläutern
		* sigma: Prandtl nr. = Viskosität / Wärmeleitungskoeffizient
		* rho: Rayleigh nr. = Wärmeausdehnung / Viskosität
		* beta: Wärmeausdehnung
(matthias)
	* Physikalischen Gesetze die Dichte, Geschwindigkeit und Temperatur beschreiben, sind die 		  Energieerhaltungsgesetze von Masse, Impuls und interne Energie
	* Primär getrieben von Dichte und Temperatur, neben Gravitation und Coriolis-Kraft
	* Erklären Kontinuitätsgleichung, Navier-Stokes Gleichung und Temperaturgleichung (x, y, z)
 ## Szenario 1
	* rho=22, sigma=10, beta 8/3 -> increment rho um 1
 ## Szenario 2
	* rho=24.7, sigma= 10, beta= 8/3 -> rho 28, man beachte, dass die y-komponente des letzten Punktes vorher positiv war, danach negativ. Auch wenn rho danach auf 24.69 gesetzt wird(delta -0.01) verändert sich die Form um den letzten Punkt erheblich. Der letzte Punkt befindet sich ganz an einem anderen Ort -> chaotisches Verhalten (minimste Parameteränderungen führen zu grossen Änderungen der Werte)
Dennoch bleibt Grundform des Modells aber erhalten
 
 ## Wie war das mit dem Schmetterling? (oli)
	* Wie wir eben gesehen haben, sind grosse Sprünge und chaotisches Verhalten in diesem Modell enthalten. Ist an dieser Aussage bezüglich dem Schmetterling also trotzdem etwas dran?
	* Bezogen auf das Lorenzmodell ist diese Theorie möglich, da aber wichtige Faktoren wie die Luftfeuchtigkeit oder auch die Wolken nicht modelliert sind, ist es leider nicht definitiv möglich zu sagen, was ein Tornado ausgelöst hat. Gerade durch das chaotische Verhalten ist es unmöglich auf solch kleine Events zurückzurechnen, selbst wenn man alle benötigten Daten hätte.










## Fragen an Hr.Müller
* Vernachlässigt das Lorenzmodell nur die Luftfeuchtigkeit oder was fehlt noch, um eine genauere Prognose aus dem Modell ziehen zu können?
* Erklären Verhalten von Szenario 1 (rho 22 -> rho 23) sprung um z-koordiante. 
