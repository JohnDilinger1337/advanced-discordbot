const {REST} = require("@discordjs/rest");
const {Routes} = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));
            const {commands, commandArray} = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                await commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been registered`);
            }
        }
        const clientID = "1020402310347767978";
        const guildID = "1020409557530456205";
        const rest = new REST({version: '10'}).setToken(process.env.token);

        try {
            await rest.put(
                Routes.applicationGuildCommands(clientID, guildID),
                {body: client.commandArray}
            );

            console.log(
                `Successfully reloaded application (/) commands.`
            );
        } catch (error) {
            console.error(error);
        }
    };
};
