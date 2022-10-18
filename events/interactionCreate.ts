import { JamytrailletteClient } from "class/JamytrailletteClient";
import { CommandInteraction } from "discord.js";

module.exports = {
    name: 'interactionCreate', 
    async execute(interaction: CommandInteraction, client: JamytrailletteClient) {
    if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
    }
}