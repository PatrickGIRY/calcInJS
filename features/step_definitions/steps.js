const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When } ) => {
   Given(/^I have these numbers in a table called "Values"$/, function (dataTable, callback) {
   //   console.log('rows = ' + dataTable.rows())
   //   console.log('hashes = ' + dataTable.hashes().map(o => JSON.stringify(o))); 
   //   values = dataTable.hashes().map(o => () => o.value1 + o.value2) 
   //   console.log('raw = ' + dataTable.raw()) 
    });

    When('I ABS these numbers and add them', function (callback) {
        console.log("When")
    });
    Then('the results should be int a table called {string}', function (string, dataTable, callback) {
        console.log("Then")
    });
})

