import { AppPage, LocationsPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let locPage: LocationsPage;

  beforeEach(() => {
    page = new AppPage();
    locPage = new LocationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to CiE');
  });

  it('should display locations header', () => {
    locPage.navigateTo();
    expect(locPage.getParagraphText()).toEqual('Campus Locations');
  });
});
