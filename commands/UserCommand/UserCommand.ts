import { JamytrailletteSlashCommandBuilder } from "@class/JamytrailletteSlashCommandBuilder";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export class UserCommand implements JamytrailletteSlashCommandBuilder {
	data = new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!');
	execute = async (interaction: ChatInputCommandInteraction): Promise<void> => {
		await interaction.reply({ content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`, ephemeral: true });
	};
};

export const command = new UserCommand();