#!/usr/bin/env node

import { Command } from 'commander';
import { APP_SETTINGS } from './constants/app-settings.const';
import { COMMANDS } from './constants/commands.const';

class Bootstrap {
	private program: Command;

	constructor() {
		this.program = this.initProgram();
		this.initCommands();
	}

	public run() {
		this.program.parse();
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
}

const bootstrap = new Bootstrap();

bootstrap.run();
