module.exports = {
    url: 'http://localhost:8080/?payment',
    elements: {
        titleSelect: '#title-select',
        mrOption: '#title-select0',
        firstName: 'input[data-nw="first-name"]',
        lastName: 'input[data-nw="last-name"]',
        postCodeFinder: 'input[data-nw="post-code-finder"]',
        postCodeBtn: '#find-address',
        postCodeSelect: '#post-code-list',
        firstPostCodeOption: '#postcode0',
        emailInput: 'input[data-nw="email"]',
        phoneInput: 'input[data-nw="phone"]',
        accNameInput: 'input[data-nw="acc-name"]',
        accNumInput: 'input[data-nw="acc-num"]',
        sortCodeInput: 'input[data-nw="sort-code"]',
        dateSelect: '#data-select',
        firstDate: '#data-select0',
        sumbitPayment: '#complete-payment'
    },
    commands: [{
        setDetails() {
            return this
                .click('@titleSelect')
                .waitForElementVisible('div[data-nw="title-select-container"]')
                .click('@mrOption')
                .setValue('@firstName', 'Nightwatch')
                .setValue('@lastName', 'Test')
                .setValue('@postCodeFinder', 'sw1 e5l')
                .click('@postCodeBtn')
                .waitForElementVisible('#post-code-list')
                .click('@postCodeSelect')
                .waitForElementVisible('div[data-nw="postcode-container"]')
                .click('@firstPostCodeOption')
                .setValue('@emailInput', 'test@test.com')
                .setValue('@phoneInput', '1111111')
                .setValue('@accNameInput', 'test')
                .setValue('@accNumInput', '12345678')
                .setValue('@sortCodeInput', '123456')
                .click('@dateSelect')
                .waitForElementVisible('div[data-nw="data-select-container"]')
                .click('@firstDate')
                .click('@sumbitPayment')
        },
        selectRadio() {
            return this
                .click('@roundRadioBtn');
        }
    }]
};
