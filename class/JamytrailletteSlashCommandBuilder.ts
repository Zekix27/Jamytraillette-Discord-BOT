import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'


export interface JamytrailletteSlashCommandBuilder {
	data: SlashCommandBuilder;
	execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}