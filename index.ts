import fs from 'node:fs';
import path from 'node:path';
import { Collection, GatewayIntentBits } from 'discord.js';
import { JamytrailletteClient } from '@class/JamytrailletteClient';
import { JamytrailletteSlashCommandBuilder } from '@class/JamytrailletteSlashCommandBuilder';
require('dotenv').config();

const client = new JamytrailletteClient({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command: JamytrailletteSlashCommandBuilder = require(filePath).command;
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventsFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(process.env.DISCORD_TOKEN);