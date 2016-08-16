'use strict';

module.exports = exports = function (group, message, pronome, user) {
  group.message('Você é mongól? Olha a cor desse negro');
};
exports.regex = [
  /ess(e|a) pessoa (.*?) é pardo\?/i,
  /(o|a) (.*?) é pardo\?/i
];