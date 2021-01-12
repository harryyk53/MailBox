const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

if (args[0]) {

const command = args[0].toLowerCase();
const findCommand = client.commands.get(command) || client.aliases.get(command);

if (!findCommand) return message.reply(`Não conseguir achar nenhum comando com o nome \`\`${args[0]}\`\`!`)

const embedInfoCommand = new MessageEmbed()
.setColor('BLUE')
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
.setDescription(`<:tag:798313029124751381> Nome: \`\`${findCommand.config.name}\`\` \n\n <:file:798312588500402236> Aliases: \`\`${findCommand.config.aliases}\`\` \n\n <:description:798313029045190716> Descrição: \`\`${findCommand.config.description}\`\``)

message.channel.send(embedInfoCommand);

}

if (!args[0]) {
const embedHelp = new MessageEmbed()
.setColor('BLUE')
.setTitle(`**${client.user.username} Ajuda**`)
.addFields(
  {name: '**Comandos para Usuário**', value: '`open`'},
  {name: '**Comandos para Moderador**', value: '`answer`,`whois`,`id`,`close`,`help`'}
)
    
message.channel.send(embedHelp);
}
  }

module.exports.config = {
  name: 'help',
  aliases: ['ajuda'],
  description: 'Mostrar todos os comandos do bot!'
}