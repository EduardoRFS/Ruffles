'use strict';
const request = require('request-promise');
const fs = require('fs-extra-promise');
const config = require('../config');

module.exports = exports = onYouTubeCommand;
exports.names = ['yt', 'youtube'];

async function onYouTubeCommand (group, message, ...args) {
  const opts = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      part: 'id,snippet',
      q: args.join(' '),
      key: config.google_key
    },
    json: true
  };
  try {
    const data = await request(opts);
    const items = data.items;
    if (items.length < 1)
      return group.message('Nenhum resultado encontrado');

    const video = items[0];
    const title = video.snippet.title;
    const url = `https://youtu.be/${video.id.videoId}`;
    group.message(` ${title} \r ${url} `);
  } catch (err) {
    console.error(err.stack);
    group.message('Fala para o edu que deu merda em alguma coisa', 256);
  }
}