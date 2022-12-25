const {Participate} = require('../../models/index');
module.exports = {
    name: 'messageReactionAdd',
    once: false,
    async execute(reaction, user) {
        try {
            const member = await reaction.message.guild.members.cache.get(user.id);
            // equivalent to: INSERT INTO _giveawayParticipatings (user_ID, user_Name, role_ID, role_Name) values (?, ?, ?);
            await Participate.create({
                user_ID: 1,
                user_Name: user.username,
                role_ID: 12,
            });
            return console.log(member.roles.highest.name);
        } catch (error) {
            console.log('Memeber Not Found.');
        }

        // if (member) console.log(member.roles.highest.name);
        // console.log(user);
        // try {
        //   // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
        //   const participate = await Participate.create({
        //     user_ID: 1,
        //     user_Name: user.username,
        //     role_ID: 12,
        //   });

        //   return console.log(`Tag ${participate.user_ID} added.`);
        // } catch (error) {
        //   if (error.name === 'SequelizeUniqueConstraintError') {
        //     return console.log('That already exists.');
        //   }

        //   return console.log(error);
        // }
    },
};
