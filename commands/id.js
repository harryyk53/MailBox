const { roleMailbox } = require('../config.json');

exports.run = async (bot, message, args) => {

if (!message.member.roles.cache.has(roleMailbox)) return;

const channelName = message.channel.name;
const splitzin = channelName.split('┆');
const id = splitzin[1];

message.channel.send(id);

}

module.exports.config = {
  name: 'id',
  aliases: ['id'],
  description: 'Mostrar o id do autor do ticket'
}