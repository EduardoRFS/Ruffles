'use strict';
const config = require('../config');

module.exports = exports = onEvalCommand;
exports.names = ['eval', 'exec'];
exports.onlyOwner = true;

const base = `(async function (group, message, ...args) { fnbody }).apply(this, arguments)
  .catch(err => group.message(err.stack.toString().slice(0, 800)))`;

async function onEvalCommand (group, message, ...args) {
  if (message.userName !== config.owner) return group.message('Haha, até a rayssa é mais inteligente que você');
  let command = args.join(' ').replace(/\r/g, '\n');
  eval(base.replace('fnbody', command));
}
