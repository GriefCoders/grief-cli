import { Error } from '@errors/error';
import { BaseParser } from './base.parser';

export class NodejsParser extends BaseParser {
	public parse(files: string[]): string[] {
		const packageJson = files.find((file) => file === 'package.json');
		if (!packageJson) {
			throw new Error('package.json not found');
		}
		return files;
	}
}
