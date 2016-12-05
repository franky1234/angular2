import { IntroA2Page } from './app.po';

describe('intro-a2 App', function() {
  let page: IntroA2Page;

  beforeEach(() => {
    page = new IntroA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
