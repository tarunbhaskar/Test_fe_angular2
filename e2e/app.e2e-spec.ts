import { EgenQuizPage } from './app.po';

describe('egen-quiz App', function() {
  let page: EgenQuizPage;

  beforeEach(() => {
    page = new EgenQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
