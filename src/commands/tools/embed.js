const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Returns An Emmbed"),
    async execute(Interaction, client) {
    },
};
