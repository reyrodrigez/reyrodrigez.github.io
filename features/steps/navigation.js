const seleniumWebdriver = require('selenium-webdriver'),
  { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
  When('I am visiting the website', function () {
    return this.driver.get('http://localhost:9000')
  });


  Then('I should see {stringInDoubleQuotes} and {stringInDoubleQuotes} menu items', function (menuItem1, menuItem2, cb) {
    const driver = this.driver,
      menu1Promise = driver.findElement(seleniumWebdriver.By.linkText(menuItem1)),
      menu2Promise = driver.findElement(seleniumWebdriver.By.linkText(menuItem2));
    Promise.all([menu1Promise, menu2Promise])
      .then(function () {
        cb();
      })
      .catch(function (err) {
        cb(err);
      })
  });
});
