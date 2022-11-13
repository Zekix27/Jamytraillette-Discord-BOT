import { JamytrailletteSlashCommandBuilder } from "@class/JamytrailletteSlashCommandBuilder";
import {ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder} from "discord.js";

export class ServerCommand implements JamytrailletteSlashCommandBuilder {
	data = new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info !');
	execute = async (
		interaction: ChatInputCommandInteraction
	): Promise<void> => {
		const serverEmbed = new EmbedBuilder()
			.setColor(0xF00900)
			.setTitle(`***${interaction.guild?.name}***`)
			.setThumbnail(interaction.guild?.icon ? interaction.guild?.iconURL() : 'https://media.tenor.com/ZgsyS1epGSYAAAAd/siuuu-ronaldo.gif')
			.setAuthor({
				name: interaction.user.username,
				iconURL: interaction.user.avatarURL() ?? "", // defaut url
			})
			.setDescription(`
				**Server name :**  ${interaction.guild?.name}\n
				**Total members :**  ${interaction.guild?.memberCount}\n
				**Created  at :**  ${interaction.guild?.createdAt.toDateString()}\n
				**Verification level :**  ${interaction.guild?.verificationLevel}
			`)
			.setTimestamp()
			.setFooter({
				text: 'Jamytraillette',
				iconURL: interaction.client.user.avatarURL() ?? '',
			});

		await interaction.reply({ embeds: [serverEmbed], ephemeral: true });
	};
}

export const command = new ServerCommand();