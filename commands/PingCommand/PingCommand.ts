import { JamytrailletteSlashCommandBuilder } from '@class/JamytrailletteSlashCommandBuilder';
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export class PingCommand implements JamytrailletteSlashCommandBuilder {
	data = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!');
	execute = async (interaction: ChatInputCommandInteraction): Promise<void> => {
		await interaction.reply(`Latency is ${interaction.client.ws.ping}`);
	};
}; 

export const command = new PingCommand();