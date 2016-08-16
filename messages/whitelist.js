'use strict';

const onWhiteList = require('../commands/whitelist');

module.exports = exports = parseCommand;
exports.regex = /adiciona (o|a) (.*?) na lista/;

function parseCommand (group, message, ...args) {
  let users = group.users
    .filter(user => user.type === 'S')
    .map(user => user.name.toLowerCase())
    .filter(user => user.indexOf(args[1]) !== -1);

  let user;

  if (users.length > 1) {
    for (let key in users) {
      if (users[key] === args[1].toLowerCase()) {
        user = users[key];
        break;
      }
    }
    if (!user) {
      group.message('Se liga mongol tem varios maluko com esse nome: ' + users.join(', '));
      return;
    }
  } else
    user = users[0];

  if (!user)
    return group.message('Não achei ninguém com esse nome, alías quem é que bota o nome do filho de '+args[1]);
  if (user === 'rufflese')
    return group.message('Eu não preciso estar na lista, eu sou o rei da lista');
  onWhiteList.call(this, group, message, user, args[0]);
}