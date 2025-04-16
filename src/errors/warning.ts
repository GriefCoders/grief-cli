import { BaseError } from './base.error';

export class Warning extends BaseError {
	constructor(message: string) {
		super(message);
	}
}
