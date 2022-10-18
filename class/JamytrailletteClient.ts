import { Client, Collection } from 'discord.js'
import { JamytrailletteSlashCommandBuilder } from './JamytrailletteSlashCommandBuilder';

export class JamytrailletteClient extends Client {
    commands!: Collection<string, JamytrailletteSlashCommandBuilder>;
}