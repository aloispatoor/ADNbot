const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// INITIALIZING COMMANDS
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
};
// SET ERROR MESSAGES
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

   const command = interaction.client.commands.get(interaction.commandName);
   if(!command) {
      console.error(`Il n'y a pas de commande du nom de ${interaction.commandName}.`);
      return;
   }

   try {
      await command.execute(interaction);
   } catch (error) {
      await interaction.reply({ content: 'Il y a eu une erreur en executant cette commande !', ephemeral: true});
   }
});

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);