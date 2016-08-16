'use strict';
const fs = require('fs-extra-promise');

module.exports = exports = onWhiteList;
exports.names = ['wl', 'whitelist'];

async function onWhiteList (group, message, user, genero) {
  const allowedUsers = this.commands.allowedUsers;
  if (!user) {
    return group.message(`A lista é muito grande ${allowedUsers.length}`);
  }

  const esse = genero === 'o' ? 'esse' : 'essa';
  user = user.toLowerCase();
  if (allowedUsers.indexOf(user) > -1)
    return group.message(`Mongól, ${esse} doente já ta na lista`, 256);

  if (getRandomArbitrary(0, 10) > 6)
    return group.message('Não tou afim, se fode ai otário', 256);

  allowedUsers.push(user);
  group.message('Adicionei essa bosta na lista', 2048);

  fs.writeFileAsync('whitelist.json', JSON.stringify(allowedUsers));
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
