'use strict';
const config = require('../config');

module.exports = exports = onEvalCommand;
exports.names = ['eval', 'exec'];
exports.onlyOwner = true;

function onEvalCommand (group, message, ...args) {
  if (message.userName !== config.owner) return group.message('Haha, até a rayssa é mais inteligente que você');
  let command = args.join(' ');
  eval(command);
}