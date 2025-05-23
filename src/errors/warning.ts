import chalk from 'chalk';
import { BaseError } from './base.error';

export class Warning extends BaseError {
	constructor(message: string) {
		super(`${chalk.yellow('[WARNING]')} ${message}`);
	}
}
