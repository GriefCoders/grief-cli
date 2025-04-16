import chalk from 'chalk';
import { BaseError } from './base.error';

export class Error extends BaseError {
	constructor(message: string) {
		super(`${chalk.red('[ERROR]')} ${message}`);
	}
}
