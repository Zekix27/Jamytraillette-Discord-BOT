import { JamytrailletteClient } from "class/JamytrailletteClient";
import { ActivityType } from 'discord.js';

module.exports = {
    name: 'ready', 
    once: true,
    execute(client: JamytrailletteClient) {
        console.log(`${client.user?.username} is ready !`);
        client.user?.setPresence({
            activities: [{name: 'Pornhub', type: ActivityType.Watching}],
            status: 'dnd'
        });
    }
}