const { prefix, guildId, roleMailbox } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {

const guild = client.guilds.cache.get(guildId);

if (message.author.bot) return;

if (message.channel.type === 'dm') {

if (message.channel.type !== 'dm' && !message.member.roles.cache.has(roleMailbox)) return; //Role para usar comandos fora da dm; 

const searchTicket = guild.channels.cache.find(ch => ch.name.includes(message.author.id)); 

if (searchTicket && !message.content.toLowerCase().startsWith(`${prefix}open`) && !message.content.toLowerCase().startsWith(`${prefix}abrir`) && !message.content.toLowerCase().startsWith(`${prefix}ajuda`) && !message.content.toLowerCase().startsWith(`${prefix}help`)) {

try {
searchTicket.send(`**(${message.author.tag}):** ${message.content}`);

const embedSendTicket = new MessageEmbed()
.setColor('BLUE')
.setDescription(`<:sucess:797830753627013130> Message enviada para **${guild.name}**`)

return message.author.send(embedSendTicket);
} catch {
return; //caso a dm dessa pessoa esteja fecha o codigo retorna
}

}

if (!searchTicket && !message.content.toLowerCase().startsWith(`${prefix}open`) && !message.content.toLowerCase().startsWith(`${prefix}abrir`) && !message.content.toLowerCase().startsWith(`${prefix}ajuda`) && !message.content.toLowerCase().startsWith(`${prefix}help`)) {
const embedNoHasTicket = new MessageEmbed()
.setColor('BLUE')
.setDescription(`Utilize \`\`${prefix}open\`\` para abrir um ticket!`) 

message.author.send(embedNoHasTicket).catche(err => {
return //caso a dm dessa pessoa esteja fecha o codigo retorna
});
}
  }

if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

const execute = client.commands.get(command) || client.aliases.get(command);

if (!execute) return;

try {
execute.run(client, message, args, guild);
} catch (e) {
console.log(e);
}
  }  