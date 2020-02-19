module.exports = {
    'Submit Regular Payment': function (browser) {
        // const calcPage = browser.page.calculatorPage();
        // const paymentPage = browser.page.paymentPage();
        //
        //
        // calcPage
        //     .navigate()
        //     .setQuery(12222)
        //     .selectRadio()
        //     .click('@roundNext')
        //     .waitForElementVisible('#donations-and-types')
        //     .click('#select0')
        //     .waitForElementVisible('.dropdown-container')
        //     .click('#zakat-item0')
        //     .click('#donations-and-types')
        //     .waitForElementVisible('div[name="giftAid"]')
        //     .click('div[data-nw="radio1"]')
        //     .click('#gift-aid')
        //     .saveScreenshot('tests_output/test.png')
        //
        // paymentPage
        //     .setDetails()
        //     .saveScreenshot('tests_output/test.png')
        //     .waitForElementVisible('#thankyou-header')
        //     .assert.visible('#thankyou-header')



        // const cashInput = 'input[name="Cash in hand"]';
        //
        // browser
        //     .url('http://localhost:8081/')
        //     .setValue(cashInput, 1222)
        //     .waitForElementVisible('#your-zakat-calculation')
        //     .click('#your-zakat-calculation')
        //     .saveScreenshot('tests_output/test.png')
        //     .waitForElementVisible('#round-up-zakat')
        //     .assert.containsText('#round-up-zakat', 'Continue')

        browser
            .url('https://www.ecosia.org/')
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .end();

    },

};
