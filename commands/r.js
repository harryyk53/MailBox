const { roleMailbox } = require('../config.json');

exports.run = async (client, message, args, guild) => {

if (!message.member.roles.cache.has(roleMailbox)) return;

if (message.channel.type === 'dm') return;

const sendMessage = args.join(' ');

if (!sendMessage) return;

const channelName = message.channel.name;
const splitzin = channelName.split('┆');
const ticketAuthor = message.guild.members.cache.get(splitzin[1]);

if (!message.guild.members.cache.get(splitzin[1]));

try {

await message.delete();

ticketAuthor.send(`**(${message.guild.name})** <:chat:797981420034457601> **Moderador:** ${sendMessage}`)
message.channel.send(`**(${message.author.tag})** <:chat:797981420034457601> **Moderador:** ${sendMessage}`)

} catch (e) {
message.reply('<:error:797830753743405096> A dm dessa pessoa está fechada peça que habilite!')
}
  }

module.exports.config = {
  name: 'r',
  aliases: ['answer', 'responder'],
  description: 'Responde um ticket aberto!'
}
