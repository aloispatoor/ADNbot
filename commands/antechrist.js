const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antechrist')
        .setDescription("Qui est l'AntéChrist ?"),
    async execute(interaction) {
        await interaction.reply("Erwan-Eva est l'AntéChrist");
    }
};