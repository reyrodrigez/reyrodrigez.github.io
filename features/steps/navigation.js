var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

defineSupportCode(function ({ Given, When, Then }) {
  When('I am visiting the website', function () {
    return this.driver.get('http://localhost:9000')
  });


  Then('I should see {stringInDoubleQuotes} and {stringInDoubleQuotes} menu items', function (menuItem1, menuItem2, cb) {
    var driver = this.driver;
    var menu1Promise = driver.findElement(seleniumWebdriver.By.linkText(menuItem1));
    var menu2Promise = driver.findElement(seleniumWebdriver.By.linkText(menuItem2));
    Promise.all([menu1Promise, menu2Promise])
      .then(function () {
        cb();
      })
      .catch(function (err) {
        cb(err);
      })
  });
});
