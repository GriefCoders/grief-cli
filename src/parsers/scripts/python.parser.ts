import { BaseParser } from './base.parser';

export class PythonParser extends BaseParser {
	public parse(files: string[]): string[] {
		console.log('python');
		return files;
	}
}
