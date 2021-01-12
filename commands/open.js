const { MessageEmbed } = require('discord.js');
const { parentMailbox, roleMailbox } = require('../config.json');
const moment = require('moment'); moment.locale('pt-br');

exports.run = async (client, message, args, guild) => {

const searchTicket = guild.channels.cache.find(ch => ch.name.includes(message.author.id));

if (searchTicket) {
const embedTicketHas = new MessageEmbed()
.setColor('RED')
.setDescription('<:error:797830753743405096> Você já possui um ticket aberto!')

return message.author.send(embedTicketHas);
}

if (!searchTicket) {

const embedCreateTicket = new MessageEmbed()
.setColor('GREEN')
.setDescription(`<:sucess:797830753627013130> Obrigado por entrar em contato com **${guild.name}**,  Deixe-nos saber o que você precisa e nossa equipe de moderação irá responder a você aqui o mais rápido possível.`)

message.author.send(embedCreateTicket);

const userConvert = guild.members.cache.get(message.author.id) //Localizando esse membro na guild
const role = guild.roles.cache.get(roleMailbox);
let ch;

ch = await guild.channels.create(`${userConvert.displayName}┆${userConvert.id}`, {
    type: 'text',
    parent: parentMailbox, //Id da categoria para criar o canal do ticket;
    permissionOverwrites: [
        {
            id: guild.id,
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        },
        {
            id: role.id,
            allow: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES']
        }
    ]
})

const ticketCreateinfo = new MessageEmbed()
.setColor('BLUE')
.setDescription('<:info:797950239104434226> **Theread Create**')
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addFields(
  {name: '<:user:797956204986368061> Usuário', value: `${message.author} (${message.author.tag})`, inline: true},
  {name: '<:id:797956204512804885> Usuário ID', value: '``'+message.author.id+'``', inline: true},
  {name: '<:calender:797956205007863829> Conta criada em', value: moment(message.author.createdTimestamp).format('LLL')},
  {name: '📥 Entrou no servidor', value: moment(userConvert.joinedAt).format('LLL')}
)

ch.send('@here',ticketCreateinfo);
}
  }

module.exports.config = {
  name: 'open',
  aliases: ['abrir'],
  description: 'Abrir o ticket via dm do  bot!'
}