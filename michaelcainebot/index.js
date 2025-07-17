require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction
  ]
});
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('messageCreate', message => {
  if (message.content === 'hello') {
    message.channel.send('Ello!');
  }
});
client.on('messageCreate', message => {
  if (message.content === 'what is your name?') {
    message.channel.send('Moy name. Is Moichel Caine.');
  }
});
client.on('messageCreate', message => {
  if (message.content === 'What makes you angry?') {
    message.channel.send('People who are intolerant. And the Dutch.');
  }
});
client.on('messageCreate', message => {
  if (message.content === 'Michael I accidentally blew up my house.') {
    message.channel.send('YOU WERE ONLY SUPPOSED TO BLOW THE BLOODY DOORS OFF!');
  }
});

// ...existing code...

const { REST, Routes } = require('discord.js');

// Register the /help command when the bot starts
client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const commands = [
    {
      name: 'help',
      description: 'Show help for Michael Caine bot'
    }
  ];

  const rest = new REST({ version: '10' }).setToken(process.env.API_TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );
    console.log('Successfully registered /help command.');
  } catch (error) {
    console.error(error);
  }
});

// Listen for slash command interactions
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'help') {
    await interaction.reply(
      'Commands:\n' +
      '`hello` - Ello!\n' +
      '`what is your name?` - Moy name. Is Moichel Caine.\n' +
      '`What makes you angry?` - People who are intolerant. And the Dutch.\n' +
      '`Michael I accidentally blew up my house.` - YOU WERE ONLY SUPPOSED TO BLOW THE BLOODY DOORS OFF!'
    );
  }
});

// ...existing code...
console.log('API_TOKEN:', process.env.API_TOKEN);
// filepath: d:\michaelcainebot-1\michaelcainebot\index.js
client.login(process.env.API_TOKEN)
  .then(() => console.log('Bot is online!'))
  .catch(console.error);
// ...existing code...);
