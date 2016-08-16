'use strict';

module.exports = exports = function (group, message, _, pronome, target) {
  const ofensas = [
    `${pronome} ${target} é uma puta duma bixa`,
    `Da ultima vez que eu vi ${pronome} ${target} ele estava chupando a rola do seu pai`,
    `Em chuva de piroca, ${pronome} ${target} usa a bunda como escudo`,
    `${pronome.toUpperCase()} namorad${pronome} d${pronome} ${target} não acha isso`,
    `Em matagal de rola ${pronome} ${target} capina com a bunda`,
    `Se pingos de chuva fossem pingos de piroca ${pronome} ${target} abriria a boca e chuparia tudo`
  ];
  let index = getRandomInt(0, ofensas.length);
  group.message(ofensas[index], 256);
};
exports.regex = /(ruffles\ |)(o|a) (.*?) é (um\ |)(viado|viadão|gay|homosexual)\?/i;

function getRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}