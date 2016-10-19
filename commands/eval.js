'use strict';
const config = require('../config');

module.exports = exports = onEvalCommand;
exports.names = ['eval', 'exec'];
exports.onlyOwner = true;

async function onEvalCommand (group, message, ...args) {
  if (message.userName !== config.owner) return group.message('Haha, até a rayssa é mais inteligente que você');
  let command = args.join(' ').replace(/\r/g, '\n');
  eval(command);
}
