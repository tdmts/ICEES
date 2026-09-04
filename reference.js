/*
 * reference.js -- het manifest van alle theoriepagina's, per module.
 *
 * Dit is de enige plaats waar een theoriepagina wordt opgesomd. Voeg een pagina
 * hier toe, niet in de HTML van een andere pagina: de theoriehub
 * (reference-dashboard.js) en de navigatiebalk (back-link.js) lezen allebei
 * dit bestand.
 *
 * Een module-id is de sleutel hieronder. Het is de mapnaam onder Labo/ in
 * kleine letters, en het staat ook in de localStorage-sleutels, dus hernoemen
 * wist de vinkjes van je studenten.
 *
 * Een href is een kale bestandsnaam naast reference.html, of een relatief pad
 * naar een document (../../../datasheets/...). Nooit een volledige
 * https://tdmts.github.io/ICEES/-URL: die stuurt elke klik in een lokale
 * preview door naar de live site.
 *
 * REEKS -- welke categorieen samen een Orion-topic vormen
 *
 * Een labo heeft vier menu-items in Orion: Inleiding (overview.html), Theorie
 * (Theorie/reference.html), Opdracht (Opdracht.html) en de dropbox waar de
 * student zijn verslag indient.
 *
 * Een reeks is zo'n menu-item. Alles wat dezelfde reeks draagt, hoort bij
 * hetzelfde item: het is een leesvolgorde met een eigen begin, en de hele
 * navigatie blijft erbinnen. back-link.js hangt er zijn "Volgende"-ketting,
 * zijn teller en zijn labomenu aan op, en reference-dashboard.js toont per hub
 * de categorieen van een reeks. Een andere reeks is een ander menu-item, en
 * daar loopt niets naartoe: het Orion-menu verspringt niet mee met de iframe,
 * dus zo'n sprong laat het menu een pagina aanwijzen die de student niet leest.
 *
 * De naam die de student op de knop ziet is de naam van de EERSTE categorie
 * van de reeks.
 *
 * Een categorie met alleen documenten (Datasheets, Handleidingen, Software)
 * draagt de reeks waar ze bij hoort, en dat is de theorie: die documenten
 * staan op de theoriehub en horen bij dat menu-item. In een ketting komen ze
 * niet terecht, want een PDF kan de navigatiebalk niet dragen, dus zo'n
 * categorie levert nul stappen en verandert niets aan de teller.
 *
 * Elke categorie zet zijn reeks er expliciet bij. Zonder die regel valt ze van
 * de hub, en dat is precies het soort stille fout waar regel 2 van
 * scripts/check-content.py op staat.
 *
 * HET SPIEKBLAD
 *
 * De begeleide stappen van Brightspace worden hier gegroepeerde
 * theoriepagina's: Linux Basis gaat van 25 commandopagina's naar ongeveer zes
 * onderwerpen. Elk labo dat zo gegroepeerd wordt, krijgt daarnaast een
 * Spiekblad.html met alle commando's in een tabel, dat de student ernaast
 * houdt terwijl hij de opdracht maakt. Dat spiekblad staat in de
 * theoriereeks, want het hoort bij het menu-item Theorie.
 *
 * Nog leeg. De zes mapnamen en de groepering liggen wel vast: zie CLAUDE.md,
 * "The six modules". Drie labo's hebben meer dan een indiening, en die hebben
 * dus meer dan een Opdracht.html en meer dan vier reeksen.
 */
window.LAB_REFERENCE = {
};
