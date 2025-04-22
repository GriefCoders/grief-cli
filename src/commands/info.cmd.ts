import { PROJECT_TYPES } from '@constants/project-types.const';
import { BaseCommand } from '@commands/command.base';
import fs from 'fs/promises';
import { GolangParser } from '@parsers/scripts/golang.parser';
import { BaseParser } from '@parsers/scripts/base.parser';
import { Warning } from '@errors/warning';
import { NodejsParser } from '@parsers/scripts/nodejs.parser';
import { PythonParser } from '@parsers/scripts/python.parser';

export class InfoCommand extends BaseCommand {
	public name = 'info';
	public alias = 'i';
	public description = 'Get information about the current project';

	public async action() {
		const files = await fs.readdir('.');

		const projectType = this.defineProjectType(files);

		const scripts = this.getProjectScripts(files, projectType);

		console.log(scripts);
	}

	private defineProjectType(files: string[]): PROJECT_TYPES {
		const rules = [
			{
				file: ['package.json', 'package-lock.json'],
				type: PROJECT_TYPES.NODEJS,
			},
			{ file: ['go.mod'], type: PROJECT_TYPES.GO },
			{
				file: ['requirements.txt', 'pyproject.toml', 'uv.lock'],
				type: PROJECT_TYPES.PYTHON,
			},
		];

		const foundRule = rules.find((rule) =>
			rule.file.some((file) => files.includes(file)),
		);
		if (!foundRule) {
			throw new Warning('Project type not found');
		}

		return foundRule.type;
	}

	private getProjectScripts(files: string[], projectType: PROJECT_TYPES) {
		const parser = this.getProjectParser(projectType);

		if (!parser) {
			return [];
		}

		return parser.parse(files);
	}

	private getProjectParser(projectType: PROJECT_TYPES): BaseParser | null {
		switch (projectType) {
			case PROJECT_TYPES.NODEJS:
				return new NodejsParser();
			case PROJECT_TYPES.GO:
				return new GolangParser();
			case PROJECT_TYPES.PYTHON:
				return new PythonParser();
			default:
				return null;
		}
	}
}
