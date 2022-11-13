import { GatewayIntentBits } from 'discord.js';
import { JamytrailletteClient } from '@class/JamytrailletteClient';
require('dotenv').config();

const client = new JamytrailletteClient(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildMessageReactions
        ]
    });

client.initialize();