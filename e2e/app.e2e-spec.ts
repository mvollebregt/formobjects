import { FormobjectsPage } from './app.po';

describe('formobjects App', () => {
  let page: FormobjectsPage;

  beforeEach(() => {
    page = new FormobjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
