'use strict';

const fs = require('fs-extra-promise');
const path = require('path');

const groups = path.join(__dirname, '..', 'groups.json');

module.exports = exports = onJoinCommand;

async function onJoinCommand (group, message, newGroup) {
  newGroup = newGroup.toLowerCase();
  let data = await fs.readFileAsync(groups);
  data = JSON.parse(data);
  if (data.indexOf(newGroup) != -1)
    return group.message('Seu retardado, já tou nessa merda', 256);

  try {
    await this.joinGroup(newGroup.toLowerCase());
    group.message('Espero que esse chat seja melhor que esse lixo', 2048);

    let data = await fs.readFileAsync(groups);
    data = JSON.parse(data);
    data.push(newGroup.toLowerCase());
    data = data.filter(filterUnique);
    data = JSON.stringify(data);
    await fs.writeFileAsync(groups, data);
  } catch (err) {
    console.error(err.stack);
    group.message('Fala para o edu que deu merda em alguma coisa', 256);
  }

  function filterUnique (item, index, array) {
    return array.indexOf(item) === index;
  }
}