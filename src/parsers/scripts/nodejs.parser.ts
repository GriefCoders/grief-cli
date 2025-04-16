import { Warning } from '../../errors/warning';
import { BaseParser } from './base.parser';

export class NodejsParser extends BaseParser {
	public parse(files: string[]): string[] {
		const packageJson = files.find((file) => file === 'package.json');
		if (!packageJson) {
			throw new Warning('package.json not found');
		}
		return files;
	}
}
