const _ = require('lodash');
const api = require('api');

const $preApi = document.getElementById('pre_api');

$preApi.innerText = api.test();

const $preLodash = document.getElementById('pre_lodash');
const arr = [1, 2, 3, 4, 5];

$preLodash.innerText = _.reduce(arr, (a, b) => a + b);
