const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const config = require('../../config');
const { TOKEN, GUILD_ID, CLIENT_ID } = config.DISCORD_BOT;

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));
            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                await commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been registered`);
            }
        }
        const rest = new REST({ version: '10' }).setToken(TOKEN);

        try {
            await rest.put(
                Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
                { body: client.commandArray }
            );

            console.log(
                `Successfully reloaded application (/) commands.`
            );
        } catch (error) {
            console.error(error);
        }
    };
};
