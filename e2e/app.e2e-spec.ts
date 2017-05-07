import { SuperDuperInventionPage } from './app.po';

describe('super-duper-invention App', () => {
  let page: SuperDuperInventionPage;

  beforeEach(() => {
    page = new SuperDuperInventionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
