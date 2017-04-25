import { AlmacenPage } from './app.po';

describe('almacen App', () => {
  let page: AlmacenPage;

  beforeEach(() => {
    page = new AlmacenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
