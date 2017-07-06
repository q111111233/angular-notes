import { AngularNotesPage } from './app.po';

describe('angular-notes App', () => {
  let page: AngularNotesPage;

  beforeEach(() => {
    page = new AngularNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
