'use strict';

module.exports = exports = onSay;
exports.names = ['say', 'talk'];

function onSay (group, message, ...args) {
  if (getRandomInt(0, 10) > 6) {
    group.message('Me obrigue', 256);
  } else
    group.message(args.join(' '));
}

function getRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}