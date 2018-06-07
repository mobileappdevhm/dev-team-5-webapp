import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private facURLs: Array<string> =
  [
   "https://www.ar.hm.edu/organisationen/ansprechpartner_3/professoren_3/Professorenliste.de.html",
   "https://www.bau.hm.edu/die_fakultaet/ansprechpartner/professoren/index.de.html",
   "https://www.me.hm.edu/fakultaet/personen/prof/index.de.html",
   "https://www.ee.hm.edu/fk04/profs/professoren.de.html",
   "https://www.bs.hm.edu/fakultt/personen/professoren_2/index.de.html",
   "https://www.hm.edu/allgemein/hochschule_muenchen/institute/bec/personen_1/lehrende/uebersicht_personen.de.html", 
   "https://www.cs.hm.edu/die_fakultaet/ansprechpartner/professoren/index.de.html",
   "https://www.geo.hm.edu/kontakt/prof/index.de.html",
   "https://www.wi.hm.edu/die_fakultaet/personen/professorinnen_und_professoren/index.de.html", 
   "https://www.bwl.hm.edu/p/profs.de.html",
   "https://www.sw.hm.edu/die_fakultaet/personen/professoren/index.de.html", 
   "https://www.design.hm.edu/mein_studium/dozentinnen_und_dozenten/index.de.html", 
   "https://www.gs.hm.edu/die_fakultaet/ansprechpartner/professoren/index.de.html"
  ];

  constructor() { }

  ngOnInit() {
  }

  getFacURLs() {
      return this.facURLs;
  }

}
