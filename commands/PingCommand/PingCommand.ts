import { JamytrailletteSlashCommandBuilder } from "@class/JamytrailletteSlashCommandBuilder";
import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
} from "discord.js";

export class PingCommand implements JamytrailletteSlashCommandBuilder {
    data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with your ping !');
    execute = async (
        interaction: ChatInputCommandInteraction
    ): Promise<void> => {
		await interaction.reply({ content: '*Pinging...*', fetchReply: true })

        const exampleEmbed = new EmbedBuilder()
            .setColor(0xF00900)
			.setTitle(`<:nerd:1041406376276148297>   *${interaction.client.ws.ping}* ms   <:nerd:1041406376276148297>`)
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.avatarURL() ?? "", // defaut url
            })
            .setFooter({
                text: 'Jamytraillette',
                iconURL: interaction.client.user.avatarURL() ?? '',
            });

        await interaction.editReply({ embeds: [exampleEmbed], content: '' });
    };
}

export const command = new PingCommand();
