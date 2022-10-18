import fs from 'node:fs';
import path from 'node:path';
import { REST, Routes }from 'discord.js';
import { JamytrailletteSlashCommandBuilder } from '@class/JamytrailletteSlashCommandBuilder';
require('dotenv').config();

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command: JamytrailletteSlashCommandBuilder = require(filePath).command;
    commands.push(command.data.toJSON());
}

if (!process.env.DISCORD_TOKEN) throw new Error("Discord token is undefined");
if (!process.env.CLIENT_ID) throw new Error("Client id is undefined");
if (!process.env.GUILD_ID) throw new Error("Guild id is undefined");

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
	.then(() => console.log(`The commands have been successfully registered !`))
	.catch(console.error);



/* To delete one command */


/* for guild-based commands */

// rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, 'commandId'))
// 	.then(() => console.log('Successfully deleted guild command'))
// 	.catch(console.error);

/* for global commands */

// rest.delete(Routes.applicationCommand(process.env.CLIENT_ID, 'commandId'))
// 	.then(() => console.log('Successfully deleted application command'))
// 	.catch(console.error);


/* To delete all commands */


/* for guild-based commands */

// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
// .then(() => console.log('Successfully deleted all guild commands.'))
// .catch(console.error);

/* for global commands */

// rest.put(Routes.applicationCommands(clientId), { body: [] })
// .then(() => console.log('Successfully deleted all application commands.'))
// .catch(console.error);