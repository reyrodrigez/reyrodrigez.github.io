const seleniumWebdriver = require('selenium-webdriver'),
    { defineSupportCode } = require('cucumber'),
    chai = require('chai'),
    expect = chai.expect;

defineSupportCode(function ({ Then }) {

    Then('I should see {stringInDoubleQuotes}', function (expectedText) {
        this.driver.findElement({ css: '.about h1' }).getText()
            .then(function (headingText) {
                expect(headingText).to.equal(expectedText);
            })
    });
});
