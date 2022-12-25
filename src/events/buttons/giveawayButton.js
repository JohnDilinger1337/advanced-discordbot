const {Participate} = require('../../models/index');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isButton()) return;
        try {
            // define required info
            const member = await interaction.member;
            const userID = await member.user.id;
            const userName = await member.user.username;
            const roleID = await member.roles.highest.id;
            const roleName = await member.roles.highest.name;

            //check if the user already participated
            const validRequest = await Participate.findOne({
                where: {user_ID: userID},
            });
            if (!validRequest) {
                // equivalent to: INSERT INTO _giveawayParticipating (user_ID, user_Name, role_ID, role_Name) values (?, ?, ?);
                const participate = await Participate.create({
                    user_ID: userID,
                    user_Name: userName,
                    role_ID: roleID,
                    role_Name: roleName,
                });
                console.log(
                    `${participate.user_Name} Successfully Participated In The Giveaway`
                );
                return interaction.reply({
                    content: 'You Have Successfully Participated In The Giveaway',
                    ephemeral: true,
                });
            } else
                return interaction.reply({
                    content: 'You Have Already Participated In The Giveaway',
                    ephemeral: true,
                });
        } catch (error) {
            console.log(error);
        }
    },
};
