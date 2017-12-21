import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.id('title')).getText();
  }
  getHeroName(id: number) {
    return element(by.id('hero-name-' + id)).getText();
  }
  getHeroDetailName() {
    return element(by.id('hero-name')).getText();
  }

  clickHero(id: number) {
    element(by.id('hero-name-' + id)).click();
  }
}
