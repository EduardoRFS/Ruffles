'use strict';

module.exports = onHelpCommand;
exports.names = ['cmds', 'cl', 'help'];

const commands = getCommands();

function onHelpCommand (group, message) {
  group.message(`Tenho essa lista de comando aqui: ${commands.join(', ')} \r DECORE TODOS`)
}


function getCommands () {
  let commands = require('require-dir')('.');
  let cmds = [];
  for (let key in commands) {
    let command = commands[key];
    if (command.onlyOwner) continue;
    let names = command.names || [key];
    cmds = cmds.concat(names);
  }
  return cmds;
}