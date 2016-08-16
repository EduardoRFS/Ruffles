'use strict';

module.exports = exports = onPing;
exports.names = ['ping'];

function onPing (group) {
  const users = group.users
    .filter(user => user.type === 'S')
    .map(user => user.name);
  const uniqueUsers = createUniqueArr(users)
    .map(user => '@'+user);
  group.message(uniqueUsers.join(' '));
}

function createUniqueArr (arr) {
  return arr.filter((item, pos) => arr.indexOf(item) === pos);
}