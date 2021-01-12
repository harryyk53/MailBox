const { MessageEmbed } = require('discord.js');
const { roleMailbox } = require('../config.json');
const moment = require('moment');

exports.run = async (client, message, args) => {

if (!message.member.roles.cache.has(roleMailbox)) return;

if (message.channel.type === 'dm') return;

const channelName = message.channel.name;
const splitzin = channelName.split('┆');
const memberInfo = message.guild.members.cache.get(splitzin[1]);

if (!memberInfo) return;

const embedinfoAuthorTicket = new MessageEmbed()
.setColor('BLUE')
.setThumbnail(memberInfo.user.displayAvatarURL({dynamic: true}))
.setDescription(`<:info:797950239104434226> **${memberInfo.displayName}**`)
.addFields(
  {name: 'Usuário Tag', value: '``'+memberInfo.user.tag+'``', inline: true},
  {name: 'Usuário ID', value: '``'+memberInfo.user.id+'``', inline: true},
  {name: 'Conta criada em', value: moment(memberInfo.user.createdTimestamp).format('LLL'), inline: true},
  {name: 'Ticket Criado em', value: moment(message.channel.createdTimestamp).format('LLL'), inline: true},
  {name: 'Cargos', value: memberInfo.roles.cache.map(r => r.toString()).join(' '), inline: true},
  {name: 'Entrou aqui em:', value: moment(memberInfo.joinedAt).format('LLL'), inline: true}
)

message.channel.send(embedinfoAuthorTicket);

}

module.exports.config = {
  name: 'whois',
  aliases: ['userinfo'],
  description: 'Mostrar ás informações do autor do ticket!'
}