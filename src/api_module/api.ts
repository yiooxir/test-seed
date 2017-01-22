const lodash = require('lodash');

function test() {
    return lodash.get({myVar: 'Hello from API'}, 'myVar');
}

module.exports = {
    test
}
