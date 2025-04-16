import { BaseParser } from './base.parser';

export class NodejsParser extends BaseParser {
	public parse(files: string[]): string[] {
		return files;
	}
}
