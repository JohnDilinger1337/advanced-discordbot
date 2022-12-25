//import sequelize & schemas
const sql = require('../sql');
const ParticipateGiveawayModel = require('./_participatingGiveaway');
const RunningGiveawayModel = require('./_runningGiveaways');
const GiveawayStatusModel = require('./_giveawayStatus');
const GiveawayConfigurationModel = require('./_giveawayConfiguration');

//create models
const GiveawayConfiguration = GiveawayConfigurationModel(sql);
const RunningGiveaway = RunningGiveawayModel(sql);
const GiveawayStatus = GiveawayStatusModel(sql);
const Participate = ParticipateGiveawayModel(sql);

//defining the associations
GiveawayConfiguration.hasOne(RunningGiveaway);
GiveawayConfiguration.belongsTo(RunningGiveaway);
GiveawayConfiguration.hasOne(GiveawayStatus);
GiveawayConfiguration.belongsTo(GiveawayStatus);


module.exports = {
    Participate,
    RunningGiveaway,
    GiveawayStatus,
    GiveawayConfiguration,
};
