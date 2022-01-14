// Require the necessary discord.js classes
const { Client, Intents, Message, VoiceChannel } = require('discord.js');
const { token } = require('./config.json');

const prefix = '='

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    client.user.setPresence({ activities: [{ name: "Learning how to code" }], status: 'online' });
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.reply('pong');
    } else if (command == 'youtube') {
        message.reply('https://youtube.com/shankia')
    } else if (command == 'help') {
        message.reply('ping - pongs, youtube - shows shanki youtube')
    } else if (VoiceChannel.full()) {
        console.log('ok its full')
    }
        
});

// Login to Discord with your client's token
client.login(token);

