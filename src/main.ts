/// <reference path="./ext.d.ts" />

const api = require('api');
const _ = require('vendor').lodash;

const $preApi = document.getElementById('pre_api');

$preApi.innerText = api.test();

const $preLodash = document.getElementById('pre_lodash');
const arr = [1, 2, 3, 4, 5];

$preLodash.innerText = _.reduce(arr, (a, b) => a + b);
