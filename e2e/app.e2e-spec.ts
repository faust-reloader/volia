import { VoliaCliPage } from './app.po';

describe('volia-cli App', () => {
  let page: VoliaCliPage;

  beforeEach(() => {
    page = new VoliaCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
