import { PROJECT_TYPES } from '../constants/project-types.const';
import { BaseCommand } from './command.base';
import fs from 'fs/promises';

export class InfoCommand extends BaseCommand {
	public name = 'info';
	public alias = 'i';
	public description = 'Get information about the current project';

	public async action() {
		const files = await fs.readdir('.');

		const projectType = this.defineProjectType(files);

		console.log(projectType);
	}

	private defineProjectType(files: string[]): PROJECT_TYPES {
		const rules = [
			{ file: 'package.json', type: PROJECT_TYPES.NODEJS },
			{ file: 'go.mod', type: PROJECT_TYPES.GO },
		];

		const foundRule = rules.find((rule) => files.includes(rule.file));
		return foundRule?.type || PROJECT_TYPES.UNKNOWN;
	}
}
