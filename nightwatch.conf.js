module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests'],

    test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities : {
                browserName: 'chrome',
                chromeOptions: {
                    args: [
                        // "--headless"
                    ]
                }
            },
            webdriver : {
                start_process: true,
                server_path: "node_modules/.bin/chromedriver",
                port: 9515
            }
        },
        safari: {
            desiredCapabilities : {
                browserName : 'safari',
                alwaysMatch: {
                    acceptInsecureCerts: false
                }
            },
            webdriver: {
                port: 4445,
                start_process: true,
                server_path: '/usr/bin/safaridriver'
            }
        },
        firefox: {
            desiredCapabilities : {
                browserName : 'firefox',
                alwaysMatch: {
                    // Enable this if you encounter unexpected SSL certificate errors in Firefox
                    // acceptInsecureCerts: true,
                    'moz:firefoxOptions': {
                        args: [
                            // '-headless',
                            // '-verbose'
                        ],
                    }
                }
            },

            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('geckodriver').path
            }
        }
    }
};
