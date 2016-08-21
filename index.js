'use strict';
const commands = require('require-dir')('commands');
const messages = require('require-dir')('messages');
const fs = require('fs-extra-promise');
const config = require('./config');
const groups = require('./groups');

const bot = new require('chjs')(groups, config.user, config.password);

bot.commands.allowedAnon = false;
bot.commands.prefix = config.prefix;

bot.on('flood_warning', function onFloodWarning (group) {
  group.commands.allowedUsers = [];
  setTimeout(() => group.commands.allowedUsers = null, 30000);
});

bot.on('message', onMessage);
for (let key in commands) {
  const command = commands[key];
  let names = command.names || [key];
  names.forEach(name => bot.commands.on(name, command.bind(bot)));
}

function onMessage (group, message, user) {
  if (!isAllowed(user)) return;

  for (let key in messages) {
    let command = messages[key];
    let regex = command.regex;
    if (!Array.isArray(regex))
      regex = [regex];
    regex.forEach(regex => {
      let data = regex.exec(message.body);
      if (data) {
        data = data.slice(1, data.length);
        let args = [group, message].concat(data);
        command.apply(this, args);
      }
    });
  }
}
function isAllowed (user) {
  if (!bot.commands.allowedUsers)
    return false;
  return bot.commands.allowedUsers.indexOf(user.toLowerCase()) !== -1;
}