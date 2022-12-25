const ms = require('ms');
const timestampString = require('../../utils/timings/getTimesTamp');
const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Start A Giveaway')
        .setDefaultMemberPermissions(
            PermissionFlagsBits.ManageMessages | PermissionFlagsBits.ManageGuild
        )
        .addStringOption((option) =>
            option
                .setName('image')
                .setDescription('Please Copy-Paste Image URL!')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('duration')
                .setDescription(
                    'How long the giveaway should last for. Example values: 1m, 1h, 1d'
                )
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('prize')
                .setDescription('Giveaway Prize?')
                .setRequired(true)
        )
        .addIntegerOption((option) =>
            option
                .setName('winners')
                .setDescription('How Many Winners The Giveaway Should Have')
                .setRequired(true)
        )
        .addChannelOption((option) =>
            option
                .setName('channel')
                .setDescription('The Channel To Start The Giveaway In')
                .setRequired(true)
        )
        .addRoleOption((option) =>
            option.setName('role').setDescription('Select A Special Role')
        ),
    async execute(interaction) {
        //define giveaway required info
        // const giveawaySpecialRoles = interaction.option.getRole('Role');
        const giveawayImage = interaction.options.getString('image');
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinners = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
        // const expirationDate =

        if (!giveawayChannel.isTextBased()) {
            return interaction.reply({
                content: ':x: Selected channel is not text-based.',
                ephemeral: true,
            });
        }
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary)
                .setCustomId('test')
        );
        const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('Some title')
            .setDescription(
                `**How to Participation?**\n -React with"<:EliteCommunity:1027602451437727794> "to enter giveaway!`
            )
            .addFields({
                name: `**Winners and Duration**`,
                value: `Winners : ${giveawayWinners} \n Duration : ${timestampString(
                    ms(giveawayDuration)
                )}`,
            })
            .setImage(`${giveawayImage}`)
            .setTimestamp()
            .setFooter({
                text: `The giveaway lasts ${giveawayDuration} and was started at ${new Date().getTime()}!`,
            });
        // var embedSent = await giveawayChannel.send({
        //   embeds: [embed],
        //   components: [row],
        // });
        console.log(time_duration);
        // interaction.reply(`Giveaway started in ${giveawayChannel}!`);
    },
};

// setTimeout(async function () {
//   var peopleReacted = await new Array(embedSent.reactions.cache.get("1027602451437727794")
//     .users.remove(client.user.id));
//   if (peopleReacted.length === 0)
//     return interaction.channel.send(
//       "Unfortunately, nobody took part in the giveaway! :("
//     );
//   var index = Math.floor(Math.random() * peopleReacted.length);
//   var winners = [];
//   var winnerMessage = "";
//   for (var i = 0; i < giveawayWinners; i++) {
//     winners.push(peopleReacted[index]);
//   }
//   for (var i = 0; i < winners.length; i++) {
//     winnerMessage += winners[i].toString() + " ";
//   }
//   let haveHas = winners.length === 1 ? "has" : "have";

//   if (giveawayWinners < winners.length) return;
//   interaction.channel.send(
//     winnerMessage + "" + haveHas + ` won **${giveawayPrize}**`
//   );
//   const winner_embed = new EmbedBuilder()
//         .setTitle(`${giveawayPrize}`)
//         .setColor('#f9b428')
//         .setDescription(`Winner:\n${giveawayWinners}\n\nHosted by: ${embedSent.author}\n\n ` + " Ended • <t:" + Math.round((new Date()).getTime() / 1000) + ":R>");
//   embedSent.edit(winner_embed);
// }, ms(giveawayDuration));

// client.on('message', async message => {
//   if (message.content === '!giveaway') {
//     // message.delete(1000);
//     // message.reply('I have sent you a list of master commands.')
//     // message.author.sendMessage("Here is the list of master commands.")
//     // console.log('Successfully sent a list of master commands to ' + message.author.id + '.')
//     message.delete();
//     var item = "";
//     var time;
//     var giveawayDuration;
//     let messageArray = message.content.split(" ");
//     for (var i = 3; i < messageArray.length; i++) {
//       item += messageArray[i] + " ";
//     }
//     giveawayDuration = messageArray[1];
//     if (!giveawayDuration)
//       return message.channel.send("You must specify the number of winners!");
//     time = messageArray[2];
//     if (!time)
//       return message.channel.send("You have to specify the time of the giveaway!");
//     if (!item)
//       return message.channel.send("You have to specify the prize of the giveaway!");
// var embed = new Discord.RichEmbed()
//   .setAuthor(item)
//   .setDescription(`React with 🎉 to enter! ${giveawayDuration} Winner(s)`)
//   .setFooter(
//     `The giveaway lasts ${time} and was started at ${date.format(
//       now,
//       "YYYY/MM/DD"
//     )} / ${date.format(now, "HH:mm:ss")}!`
//   );
// var embedSent = await message.channel.send(embed);
// embedSent.react("🎉");
// setTimeout(function () {
//   var peopleReacted = embedSent.reactions
//     .get("🎉")
//     .users.filter((user) => user.id !== client.user.id)
//     .array();
//   if (peopleReacted.length === 0)
//     return message.channel.send(
//       "Unfortunately, nobody took part in the giveaway! :("
//     );
//   var index = Math.floor(Math.random() * peopleReacted.length);
//   var winners = [];
//   var winnerMessage = "";
//   for (var i = 0; i < giveawayDuration; i++) {
//     winners.push(peopleReacted[index]);
//   }
//   for (var i = 0; i < winners.length; i++) {
//     winnerMessage += winners[i].toString() + " ";
//   }
//   let haveHas = winners.length === 1 ? "has" : "have";

//   if (giveawayDuration < winners.length) return;
//   message.channel.send(winnerMessage + "" + haveHas + ` won **${item}**`);
//   let embed = new Discord.RichEmbed()
//     .setAuthor(`${item}`)
//     .setDescription(`Winner(s): ${winnerMessage}`)
//     .setFooter(`The giveaway ended!`);
//   embedSent.edit(embed);
// }, ms(time));
//   }
// });
