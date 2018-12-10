const axios = require('axios');
const _ = require('lodash');


function DEMO(key) {
	this.key = key;
}


DEMO.prototype.start = function(text) {
  return `${this.key} : ${text}`;
};


module.exports = {
	_,
	axios,
	DEMO
};
