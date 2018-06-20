import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}

export class LocationsPage {
  navigateTo() {
    return browser.get('/locations');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}
