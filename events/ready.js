module.exports = async (client) => {

client.user.setActivity('Contate-me para obter ajuda!',  {type: 'WATCHING'});
console.log(`${client.user.username} acaba de iniciar!`)
}