'use strict';

const Promise = require('bluebird');
const request = require('request-promise');
const cheerio = require('cheerio');

module.exports = exports = onXVideosCommand;
exports.names = ['xv', 'xvideos'];

async function onXVideosCommand (group, message, ...args) {
  const opts = {
    url: 'http://www.xvideos.com/',
    qs: {
      k: args.join(' ') || 'gay sex'
    },
    transform (body) {
      return cheerio.load(body);
    }
  };
  try {
    const $ = await request(opts);
    // TODO melhorar isso
    let items = $('.mozaique > .thumb-block a');
    let links = [];
    for (let i = 0; i < 3; i++)
      links.push('http://www.xvideos.com/' + items[i].attribs.href);

    group.message(`Se mata ai seu punheteiro: \r ${links.join('\r')}`);
  } catch (err) {
    console.error(err.stack);
    group.message('Fala para o edu que deu merda em alguma coisa', 256);
  }
}