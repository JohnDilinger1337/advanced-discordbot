module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const {commands} = client;
            const {commandName} = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.replay({
                    content: `Something went wrong while executing this command...`,
                    ephemeral: true,
                });
            }
        } else if (interaction.isButton()) {
            // console.log(interaction.customId);
        }
    },
};
