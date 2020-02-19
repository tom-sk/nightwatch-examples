module.exports = {
    url: 'http://localhost:8080/',
    elements: {
        cashInput: 'input[name="Cash in hand"]',
        roundRadioBtn: 'div[data-nw="radio1"]',
        roundNext: '#round-up-zakat'
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@cashInput', value);
        },
        selectRadio() {
            return this
                .click('@roundRadioBtn');
        }
    }]
};
