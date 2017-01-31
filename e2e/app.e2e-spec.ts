import { Ng2cleanPage } from './app.po';

describe('ng2clean App', function() {
  let page: Ng2cleanPage;

  beforeEach(() => {
    page = new Ng2cleanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
