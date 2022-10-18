import { JamytrailletteSlashCommandBuilder } from "@class/JamytrailletteSlashCommandBuilder";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export class ServerCommand implements JamytrailletteSlashCommandBuilder {
	data = new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!');
	execute = async (interaction: ChatInputCommandInteraction): Promise<void> => {
		await interaction.reply(`Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}\nCreated  at: ${interaction.guild?.createdAt}\nVerification level: ${interaction.guild?.verificationLevel}`);
	};
};

export const command = new ServerCommand();