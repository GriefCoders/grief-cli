import { Command } from 'commander';
import { APP_SETTINGS } from '../constants/app-settings.const';
import { COMMANDS } from '../constants/commands.const';
import os from 'os';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import { BaseError } from '../errors/base.error';

export class App {
	private program: Command;
	private homedir: string;

	constructor() {
		this.program = this.initProgram();
		this.homedir = this.createHomeDir();
		this.initCommands();
	}

	public async run() {
		try {
			await this.program.parseAsync();
		} catch (error: unknown) {
			this.handleErrors(error);
		}
	}

	private handleErrors(error: unknown) {
		if (error instanceof BaseError) {
			console.log(error.message);
		} else {
			console.log(chalk.red('UNHANDLED ERROR:'), error);
		}
	}

	private initProgram() {
		const program = new Command();

		program
			.name(APP_SETTINGS.APP_NAME)
			.description(APP_SETTINGS.APP_DESCRIPTION)
			.version(APP_SETTINGS.APP_VERSION);

		return program;
	}

	private initCommands() {
		for (const command of COMMANDS) {
			this.program
				.command(command.name)
				.alias(command.alias)
				.description(command.description)
				.action(command.action.bind(command));
		}
	}

	private createHomeDir() {
		const homedir = path.join(os.homedir(), `.${APP_SETTINGS.APP_NAME}`);

		if (!fs.existsSync(homedir)) {
			fs.mkdirSync(homedir, { recursive: true });
		}

		return homedir;
	}
}
