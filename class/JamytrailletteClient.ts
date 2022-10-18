import fs from "node:fs";
import path from "node:path";
import { Client, Collection } from "discord.js";
import { JamytrailletteSlashCommandBuilder } from "@class/JamytrailletteSlashCommandBuilder";

export class JamytrailletteClient extends Client {
    commands!: Collection<string, JamytrailletteSlashCommandBuilder>;

    initialize(): void {
        this.loadCommands();
        this.loadEvents();
        this.login(process.env.DISCORD_TOKEN);
    }

    private loadCommands(): void {
        this.commands = new Collection();
        const commandsPath = path.join(__dirname, "../commands/");
        const commandsFiles = fs
            .readdirSync(commandsPath)
            .filter((file) => file.endsWith("Command"));

        for (const file of commandsFiles.flat()) {
            const folderPath = path.join(commandsPath, file);
            const filePath = path.join(folderPath, fs.readdirSync(folderPath)[0]);
            const command: JamytrailletteSlashCommandBuilder =
                require(filePath).command;
            this.commands.set(command.data.name, command);
        }
    }

    private loadEvents(): void {
        const eventsPath = path.join(__dirname, "../events");
        const eventsFiles = fs
            .readdirSync(eventsPath)
            .filter((file) => file.endsWith(".js"));

        for (const file of eventsFiles) {
            const filePath = path.join(eventsPath, file);
            const event = require(filePath);
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args));
            } else {
                this.on(event.name, (...args) => event.execute(...args, this));
            }
        }
    }
}
