import { AdopteUnDevPage } from './app.po';

describe('adopte-un-dev App', function() {
  let page: AdopteUnDevPage;

  beforeEach(() => {
    page = new AdopteUnDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
