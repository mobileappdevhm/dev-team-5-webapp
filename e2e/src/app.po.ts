import { browser, by, element } from 'protractor';


export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  doLogin() {

    // Find page elements
    var userNameField = browser.driver.findElement(by.id("user"));
    var userPassField = browser.driver.findElement(by.id("pass"));
    var userLoginBtn  = browser.driver.findElement(by.id("log"));
    
    userNameField.click();

    // Fill input fields
    userNameField.sendKeys("massad@hm.edu");
    userPassField.click();
    userPassField.sendKeys("Test1234!");

    // Ensure fields contain what we've entered
    expect(userNameField.getAttribute("value")).toEqual("massad@hm.edu");
    expect(userPassField.getAttribute("value")).toEqual("Test1234!");
    
    // Click to sign in - waiting for Angular as it is manually bootstrapped.
    userLoginBtn.click();

      //     return browser.driver.wait(function() {
      //       browser.waitForAngular();
      //       expect(browser.driver.getCurrentUrl()).toMatch('/');
      // }, 10000)
  }
}

export class AppPage {
  navigateTo() {
    return browser.get('');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}

export class LocationsPage {
  navigateTo() {
    return browser.get('locations');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
}


