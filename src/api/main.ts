/// <reference path="../ext.d.ts" />
const _ = require('vendor').lodash;

function test() {
  const object = {myVal: 'Hello world (form #test)'};
  return  _.get(object, 'myVal');
}

module.exports = {
  test
};

