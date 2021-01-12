const Discord = require('discord.js');
const client = new Discord.Client();

const { config } = require('dotenv');
const { readdirSync } = require('fs');

config({path: __dirname + '/.env'}); 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commands = readdirSync('./commands/').filter(file => file.endsWith('.js'));

commands.forEach(f => {
    const props = require(`./commands/${f}`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
        client.aliases.set(alias, props);
    })
})

const eventsFiles = readdirSync('./events/').filter(file => file.endsWith('.js'));

eventsFiles.forEach(f => {
    const eventName = f.split('.')[0];
    const event = require(`./events/${f}`);

    client.on(eventName, event.bind(null, client));
});

client.login(process.env.TOKEN);
