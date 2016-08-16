'use strict';

module.exports = exports = onUsers;
exports.names = ['users'];

function onUsers (group) {
  const users = group.users;
  const usersOnly = users
    .filter(user => user.type === 'S')
    .map(user => user.name)
    .sort();

  const msg = users.length + ' - ' + usersOnly.join(', ');
  group.message(msg);
}