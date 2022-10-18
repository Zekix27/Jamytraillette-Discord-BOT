import { Client, Collection } from 'discord.js'
import { JamytrailletteSlashCommandBuilder } from '@class/JamytrailletteSlashCommandBuilder';

export class JamytrailletteClient extends Client {
    commands!: Collection<string, JamytrailletteSlashCommandBuilder>;
}