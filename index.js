// const fs = require('node:fs');
// const path = require('node:path');
const { Client, Events, GatewayIntentBits, Collection, WelcomeChannel } = require("discord.js");
const { token } = require('./config.json');

// INITIALIZING CLIENT
const client = new Client({ 
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers
   ] });

client.on('ready', () => {
   console.log("Bot Opérationnel");
});

// MESSAGE
client.on("messageCreate", message => {
   if(message.author.bot){
      return;
   }
   console.log(message);
   if(message.content === "Qui est l'antechrist ?" || message.content === "Qui est l'antéchrist ?"){
      message.reply("<@" + "703541820201893930" + "> est l'antechrist ⛧⛧⛧");
   } else if(message.content === "Tu connais la blague de la chaise ?"){
      // SEND A MESSAGE WITHOUT @ 
      message.channel.send("Elle est pliante");
   } else if(message.content === "help"){
      message.reply("Mes commandes sont : \n 'Qui est l'antechrist ?' \n 'Tu connais la blague de la chaise ?' \n C'est tout, pour le moment.");
   }
});

// WELCOME MESSAGE FOR NEW MEMBERS
client.on("guildMemberAdd", member => {
   console.log("Un nouveau membre est arrivé !");
   client.channels.cache.get("853360863569510404").send("<@" + member.id + ">, bienvenu-e chez nous. Installe-toi, on est bien :) \n Nous te demandons de lire notre channel <#" + "933145585144455208" + "> s'il te plaît. Merci ♥" );
});

client.login(token);