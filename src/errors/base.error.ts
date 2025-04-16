import chalk from 'chalk';

export class BaseError extends Error {
	public message: string;
	constructor(message: string) {
		message = `${chalk.red('[ERROR]')} ${message}`;
		super(message);
		this.message = message;
	}
}
