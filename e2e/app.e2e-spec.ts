import { BetterFlixPage } from './app.po';

describe('better-flix App', () => {
  let page: BetterFlixPage;

  beforeEach(() => {
    page = new BetterFlixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
