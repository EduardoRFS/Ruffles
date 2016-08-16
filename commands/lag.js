'use strict';

module.exports = exports = onLagCommand;
exports.alias = ['lag', 'latency'];

async function onLagCommand (group) {
  const connection = group.connection;
  const latency = await connection.ping();
  group.message(latency + 'ms');
}