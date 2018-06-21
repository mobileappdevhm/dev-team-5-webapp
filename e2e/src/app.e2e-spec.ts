import { AppPage, LocationsPage, LoginPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let locPage: LocationsPage;
  let logPage: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    locPage = new LocationsPage();
    logPage = new LoginPage();
  });


  it('should display login header', () => {
    logPage.navigateTo();
    expect(logPage.getParagraphText()).toEqual('Hallo');
  });
  
  it('should login', () => {
    logPage.navigateTo();
    logPage.doLogin();
  });
  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to CiE');
  // });
  // it('should display locations header', () => {
  //   locPage.navigateTo();
  //   expect(locPage.getParagraphText()).toEqual('Campus Locations');
  // });


});