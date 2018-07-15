import { SimplyCaptivatingPage } from './app.po';

describe('simply-captivating App', () => {
  let page: SimplyCaptivatingPage;

  beforeEach(() => {
    page = new SimplyCaptivatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
