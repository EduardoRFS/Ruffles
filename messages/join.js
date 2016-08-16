'use strict';
const onJoinCommand = require('../commands/join');

module.exports = exports = parseCommand;
exports.regex = /ruffles entra lá (na|no) (\S+)/;

function parseCommand (group, message, _, chat) {
  onJoinCommand.call(this, group, message, chat)
}