import { TestAg4Page } from './app.po';

describe('test-ag4 App', () => {
  let page: TestAg4Page;

  beforeEach(() => {
    page = new TestAg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
