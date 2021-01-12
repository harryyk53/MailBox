module.exports = async (client, member) => {

const channel = client.channels.cache.find(ch => ch.name.includes(member.id));

if (!channel) return;

if (channel) {
channel.send('<:info:797950239104434226> Esse membro saiu do servidor, para evitar erros não utilize mais comandos aqui, feche manualmente o canal!')
}

}