// const _ = require('./vendor');
// import vendor from './vendor/main';
const vendor = require('./libs/vendor');
// import vendor from './libs/vendor';
// const test = require('./test');
const lodash = require('lodash');
// import { get } from 'lodash';

console.log(213123123123, vendor);
console.log(11, lodash.get({a: 1}, 'a'), 33);
