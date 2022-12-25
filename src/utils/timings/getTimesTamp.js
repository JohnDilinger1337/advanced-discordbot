const ms = require('ms');
module.exports = (duration) => {
    const timestamp = new Date().getTime() + ms(duration);
    const timestampInSecs = Math.floor(timestamp / 1000); // Necessary division
    // Choose appropriate formatting option - the one GiveawayBot uses is R
    return `<t:${timestampInSecs}:R>`;
};
