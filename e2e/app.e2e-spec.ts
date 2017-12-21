import { AppPage } from './app.po';

describe('karumi-super-heros App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Kata Super Heroes', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Kata Super Heroes');
  });
  it('should display hero name Scarlet Witch', () => {
    page.navigateTo();
    expect(page.getHeroName(0)).toEqual('Scarlet Witch');
  });
  it('should display hero name Iron Man', () => {
    page.navigateTo();
    expect(page.getHeroName(1)).toEqual('Iron Man');
  });
 

  it('should display in detail page, hero name Iron Man', () => {
    page.navigateTo();
    page.clickHero(1);

    expect(page.getHeroDetailName()).toEqual('Iron Man');
  });
});
