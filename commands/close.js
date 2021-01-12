const { MessageEmbed } = require('discord.js');
const { roleMailbox } = require('../config.json');
const ms = require('ms');

exports.run = async (client, message, args, guild) => {

if (!message.member.roles.cache.has(roleMailbox)) return;

const channelName = message.channel.name;
const splitzin = channelName.split('┆');
const id = message.guild.members.cache.get(splitzin[1]);

if (!id) return;

const embedClose = new MessageEmbed()
.setColor('BLUE')
.setDescription(`<:info:797950239104434226> O seu ticket aberto em **${guild.name}** foi fechado!`)

if (!args[0]) {
message.channel.send('<:sucess:797830753627013130> Esse ticket será fechado em 5 segundos!')
setTimeout(() => {

id.send(embedClose);
message.channel.delete();
},5000)
  
} else {
const time = ms(args[0]);

if (time) {
message.channel.send(`<:sucess:797830753627013130> Esse ticket será fechado no tempo de ${args[0]}!`)
setTimeout(() => {
id.send(embedClose);
message.channel.delete();
}, time);

}
 }
  }

module.exports.config = {
  name: 'close',
  aliases: ['fechar'],
  description: 'Fechar um ticket!'
}