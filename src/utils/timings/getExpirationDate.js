const moment = require('moment');

module.exports = (addedTime) => {
    const date = moment(new Date());
    if (addedTime.includes('m')) {
        return date
            .add(parseInt(addedTime.split(addedTime.split('m'))), 'm')
            .format('MMMM Do YYYY, h:mm:ss a');
    } else if (addedTime.includes('h')) {
        return date
            .add(parseInt(addedTime.split(addedTime.split('h'))), 'h')
            .format('MMMM Do YYYY, h:mm:ss a');
    } else if (addedTime.includes('d')) {
        return date
            .add(parseInt(addedTime.split(addedTime.split('d'))), 'd')
            .format('MMMM Do YYYY, h:mm:ss a');
    } else return false;
};
