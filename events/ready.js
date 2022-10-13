const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready', 
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.username}`);
        client.user.setPresence({
            activities: [{name: 'Pornhub', type: ActivityType.Watching}],
            status: 'idle'
        });
    }
}